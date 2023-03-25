import { HiSun } from "react-icons/hi";
import { FaCloudMoon } from "react-icons/fa";
import { StyledDarkMode } from "./styles";
import { useGlobalContext } from "@/contexts/GlobalContext";

const DarkMode = () => {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <button
      type="button"
      aria-label="alternar modo escuro"
      onClick={() => {
        toggleTheme();
      }}
    >
      <StyledDarkMode>
        {theme === "light" ? (
          <>
            <div className="active">
              <HiSun />
            </div>
            <div>
              <FaCloudMoon />
            </div>
          </>
        ) : (
          <>
            <div>
              <HiSun />
            </div>
            <div className="active">
              <FaCloudMoon />
            </div>
          </>
        )}
      </StyledDarkMode>
    </button>
  );
};

export default DarkMode;
