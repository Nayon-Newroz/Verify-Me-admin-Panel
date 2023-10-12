import React from "react";

const FingerPrintIcon = ({ color, iconClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={iconClass}
    >
      <path
        d="M5.16398 14.5842C5.10071 12.3546 5.33656 10.1114 6.06783 8.25781C7.15769 5.49525 9.785 3.6869 12.6536 4.45553C15.5221 5.22416 17.2245 8.1727 16.4559 11.0413C16.0245 12.6509 15.6009 14.0447 15.7604 15.7355M11.2614 9.64958C9.91711 12.7863 10.3652 15.4749 10.8135 17.7154M13.2973 16.8247C12.6885 13.8953 13.122 12.5801 13.8526 10.3636L13.8586 10.3454C14.2429 8.91114 13.3918 7.43687 11.9575 7.05255C10.5232 6.66824 9.04894 7.51941 8.66462 8.95369C7.94388 11.8116 7.39245 13.6082 7.84521 16.3766M16.6019 0.916687L18.8427 0.916687C20.0802 0.916687 21.0834 1.9199 21.0834 3.15743V5.39817M16.6019 21.0834H18.8427C20.0802 21.0834 21.0834 20.0801 21.0834 18.8426V16.6019M5.39823 0.916687L3.15749 0.916687C1.91996 0.916687 0.916748 1.9199 0.916748 3.15743L0.916748 5.39817M5.39823 21.0834H3.15749C1.91996 21.0834 0.916748 20.0801 0.916748 18.8426L0.916748 16.6019"
        stroke={color || "#555555"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FingerPrintIcon;
