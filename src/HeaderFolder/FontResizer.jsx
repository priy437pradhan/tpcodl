import "./Header.scss";

function FontResizer() {
  const increaseFontSize = () => {
    const currentRootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newFontSize = currentRootFontSize + 2;
    if (newFontSize <= currentRootFontSize + 8) {
      document.documentElement.style.fontSize = newFontSize + 'px';
    }
  };

  const decreaseFontSize = () => {
    const currentRootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newFontSize = currentRootFontSize - 2;
    if (newFontSize >= 8) {
      document.documentElement.style.fontSize = newFontSize + 'px';
    }
  };

  return (
    <div className="font-resizer">
      <button className="btn btn-increase" onClick={increaseFontSize}>A+</button>
      <button className="btn btn-decrease" onClick={decreaseFontSize}>A-</button>
      
    </div>
  );
}

export default FontResizer;
