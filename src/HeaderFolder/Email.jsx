// import  { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import "./Header.scss";

// const Email = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleToggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSelectEmail = (email) => {
//     console.log('Selected email:', email);
//   };

//   const handleDropdownClick = (event) => {
    
//     event.stopPropagation();
//   };

//   return (
//     <div className="email" onClick={handleToggleDropdown}>
//       <FontAwesomeIcon icon={faEnvelope} />
//       <span className="email-label">Mail Us</span>
//       {isDropdownOpen && (
//         <div className="email-dropdown" onClick={handleDropdownClick}>
//           customercare@tpcentralodisha.com
//         </div>
//       )}
//     </div>
//   );
// };

// export default Email;
