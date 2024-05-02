function Title({ showLightMode, showDarkMode, isDarkMode }) {
  return (
    <div className="title">
      <p className="main-title">Todo</p>
      {isDarkMode && (
        <img
          className="mode"
          src="./icon-sun.svg"
          alt="sun"
          onClick={showLightMode}
        />
      )}
      {!isDarkMode && (
        <img
          className="mode"
          src="./icon-moon.svg"
          alt="moon"
          onClick={showDarkMode}
        />
      )}
    </div>
  );
}

export default Title;
