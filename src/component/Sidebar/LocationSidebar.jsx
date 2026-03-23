import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ADDRESS_API, LOCATION_API } from "../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { toggleLocationSidebar } from "../../Store/toggleSlice";
import { getLocation } from "../../Store/locationSlice";
import { useNavigate } from "react-router-dom";

const LocationSidebar = () => {
  const [locations, setLocations] = useState([]);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLocationSidebarOpen = useSelector(
    (state) => state.toggle.isLocationSidebarOpen,
  );

  const handleSearchLocation = async (e) => {
    const value = e.target.value; // ✅ capture value immediately — don't rely on stale state
    setSearchText(value);

    // ✅ use value directly, not searchText (which is stale until next render)
    if (value.length < 3) {
      setLocations([]);
      return;
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_BASE_URL + LOCATION_API + value, // ✅ value not searchText
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      setLocations(json?.data ?? []);
    } catch (error) {
      console.error("Location search failed:", error);
    }
  };

  const handleUserLocation = async (placeid) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BASE_URL + ADDRESS_API + placeid,
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const { data } = await response.json();
      dispatch(
        getLocation({
          city: data[0]?.address_components[0]?.short_name,
          lat: data[0]?.geometry?.location?.lat,
          lng: data[0]?.geometry?.location?.lng,
          address: data[0]?.formatted_address,
        }),
      );
      handleCloseSidebar();
      // ✅ navigate instead of window.location.reload() — preserves Redux state
      navigate("/");
    } catch (err) {
      console.error("Address fetch failed:", err);
    }
  };

  const handleCloseSidebar = () => {
    dispatch(toggleLocationSidebar());
    document.body.classList.remove("overflow-hidden");
    setSearchText("");
    setLocations([]);
  };

  return (
    <>
      <div
        className={`fixed top-0 h-full overflow-y-scroll bg-white transition-all duration-500 z-30 sm:px-10 px-5 py-5 w-full sm:py-10 flex flex-col sm:w-[400px] ${
          isLocationSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="text-3xl mb-5" onClick={handleCloseSidebar}>
          <IoIosCloseCircleOutline />
        </button>
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              className="h-14 text-base font-semibold bg-transparent px-5 overflow-hidden border w-full"
              placeholder="Search for area, street name.."
              onChange={handleSearchLocation}
              value={searchText}
            />
            {searchText && (
              <button
                type="button"
                onClick={() => {
                  setSearchText("");
                  setLocations([]);
                }}
                className="absolute right-4 text-sm top-1/2 -translate-y-1/2 font-semibold text-red-400"
              >
                Cancel
              </button>
            )}
          </div>
          <ul className="dropdown absolute left-0 right-0 bg-white shadow-lg rounded-b-lg z-10">
            {searchText &&
              locations?.map((item) => (
                <li
                  onClick={() => handleUserLocation(item?.place_id)}
                  key={item?.place_id}
                  className="cursor-pointer relative hover:bg-gray-50 transition-colors"
                >
                  <div className="md:p-4 py-3 px-4 flex items-start gap-3 border-b border-gray-100">
                    <div className="text-lg text-gray-400 pt-0.5 flex-shrink-0">
                      <GoLocation />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-800">
                        {item?.structured_formatting?.main_text}
                      </h3>
                      <h4 className="text-xs text-gray-500 leading-5">
                        {item?.structured_formatting?.secondary_text}
                      </h4>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div
        className={`location-sidebar-overlay ${
          isLocationSidebarOpen ? "fixed" : "hidden"
        } z-10 top-0 left-0 right-0 bottom-0 bg-black opacity-50`}
        onClick={handleCloseSidebar}
      ></div>
    </>
  );
};

export default LocationSidebar;
