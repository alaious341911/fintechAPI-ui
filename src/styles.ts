import CSS from 'csstype'

interface StyleObject {
  aside: string
  asideScrollbars: string
  asideBrand: string
  asideMenuItem: string
  asideMenuItemActive: string
  asideMenuDropdown: string
  navBarItemLabel: string
  navBarItemLabelHover: string
  navBarItemLabelActiveColor: string
  overlay: string
}

export const basic: StyleObject = {
  aside: 'bg-gray-800',
  asideScrollbars: 'aside-scrollbars-gray',
  asideBrand: 'bg-gray-900 text-white',
  asideMenuItem: 'text-gray-500 hover:text-black',
  asideMenuItemActive: 'font-bold text-white',
  asideMenuDropdown: 'bg-[#EEF4FF]',
  navBarItemLabel: 'text-black',
  navBarItemLabelHover: 'hover:text-blue-500',
  navBarItemLabelActiveColor: 'text-blue-600',
  overlay: 'from-gray-700 via-gray-900 to-gray-700',
}

export const white: StyleObject = {
  aside: 'bg-white',
  asideScrollbars: 'aside-scrollbars-light',
  asideBrand: '',
  asideMenuItem: 'text-blue-600 hover:text-black dark:text-white',
  asideMenuItemActive: 'font-bold text-black dark:text-white',
  asideMenuDropdown: 'bg-gray-100/75',
  navBarItemLabel: 'text-blue-600',
  navBarItemLabelHover: 'hover:text-black',
  navBarItemLabelActiveColor: 'text-black',
  overlay: 'from-white via-gray-100 to-white',
}

export const moneyWayText: CSS.Properties = {
  width: '176px',
  height: '45px',

  /* Headline Bold - 32 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '140%',
  display: 'inline',
  marginTop: '100px',
  marginLeft: '85px',

  /* identical to box height, or 45px */

  letterSpacing: '0.25px',

  /* Indigo 700 */

  color: '#3538CD',
}

export const textInput: CSS.Properties = {
  padding: '12px 16px',
  gap: '8px',

  /* White */

  background: '#FFFFFF',
  /* Grey 400 */

  border: '1px solid #98A2B3',
  borderRadius: '6px',
}

export const submitButton: CSS.Properties = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  padding: '10px 16px',
  width: '100%', // add this line
  marginTop: '10px',

  /* Indigo 700 */

  background: '#009E6',
}
export const submitButtonRed: CSS.Properties = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  padding: '10px 16px',
  width: '100%', // add this line
  marginTop: '10px',

  /* Indigo 700 */

  background: '#EE4B2B',
}

export const submitButtonNuetral: CSS.Properties = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  padding: '10px 16px',
  width: '100%', // add this line
  marginTop: '10px',

  /* Indigo 700 */

  background: '#A9A9A9',
}

export const submitButtonInfo: CSS.Properties = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  padding: '10px 16px',
  width: '100%', // add this line
  marginTop: '10px',

  /* Indigo 700 */

  background: '#005f69',
}


export const backgroundGradient: CSS.Properties = {

    background: "linear-gradient(33deg, #83e2bb 60%, #8A2BE2 40%)",
    fontFamily: "Source Sans Pro",
  
}

export const deeladColor: CSS.Properties = {

  color: "#ffffff",
  fontWeight: 'bold'

}

export const moneyWayHeader: CSS.Properties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '24px',

  color: '#012A4A',
}

export const moneyWayTitle: CSS.Properties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '140%',

  color: '#3538CD',
}

export const pagesTitle: CSS.Properties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '140%',
  letterSpacing: '0.25px',

  color: '#3538CD',
}

export const formPText: CSS.Properties = {
  height: '20px',

  /* Button Semi Bold - 14 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  marginTop: '10px',
  marginBottom: '20px',
}

export const dashBoardHText: CSS.Properties = {
  height: '20px',

  /* Button Semi Bold - 14 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#101828',
}

export const darkBlueBox: CSS.Properties = {
  background: '#3538CD',
  borderRadius: '24px',
}

export const orangeBox: CSS.Properties = {
  background: '#FEFDF0',
  borderRadius: '24px',
}

export const forgotPText: CSS.Properties = {
  height: '20px',

  /* Button Semi Bold - 14 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '13px',
  lineHeight: '20px',
  color: '#1570EF',
}

export const dashIconText: CSS.Properties = {
  height: '20px',

  /* Button Semi Bold - 14 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '13px',
  lineHeight: '20px',
  color: '#101828',
}

export const formLink: CSS.Properties = {
  color: '#3538CD',
  fontWeight: 'bolder',
}

export const dashBoardField: CSS.Properties = {
  boxSizing: 'border-box',

  /* Auto layout */

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '12px 16px',
  gap: '8px',

  height: '44px',

  /* White */

  background: '#FFFFFF',
  /* Grey 400 */

  border: '1px solid #98A2B3',
  borderRadius: '6px',
}

export const submitButtonDashboard: CSS.Properties = {
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 16px',
  gap: '8px',
  color: '#fff',
  height: '44px',

  /* Indigo 700 */

  background: '#3538CD',
  borderRadius: '6px',
}

export const cardBoxStyle: CSS.Properties = {
  boxSizing: 'border-box',

  /* Auto layout */

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '32px',
  gap: '40px',

  // width: '623px',
  // height: '516px',

  /* White */

  background: '#FFFFFF',
  /* Grey 400 */

  border: '1px solid #fff',
  borderRadius: '6px',
}

export const dashboardFormPText: CSS.Properties = {
  height: '20px',

  /* Button Semi Bold - 14 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#3538CD',
  marginBottom: '10px',
}

export const dashboardBoxTextWhite: CSS.Properties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  color: '#fff',
}

export const dashboardBoxTextLWhite: CSS.Properties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '140%',
  color: '#fff',
}

export const dashboardBoxTextDark: CSS.Properties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  color: '#101828',
  lineHeight: '20px',
}

export const dashboardBoxTextLDark: CSS.Properties = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '140%',
  color: '#101828',
}

export const dashboardHeading: CSS.Properties = {
  height: '34px',

  /* Button Semi Bold - 14 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '140%',
  color: '#101828',
  marginBottom: '10px',
}

export const SummationRow: CSS.Properties = {
  height: '34px',

  /* Button Semi Bold - 14 */

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '20%',
  color: '#101828',
  marginBottom: '10px',
}

export const tabCss: CSS.Properties = {
  padding: '15px',
  textAlign: 'center',
  width: '50%',
  background: 'rgba(128, 128, 128, 0.075)',
  cursor: 'pointer',
  borderBottom: '1px solid rgba(0, 0, 0, 0.274)',
  boxSizing: 'content-box',
  position: 'relative',
  outline: 'none',
}

export const tabBlock: CSS.Properties = {
  display: 'flex',
}

export const activeTab: CSS.Properties = {
  background: 'white',
  borderBottom: '1px solid transparent',
}

export const errorMessage = {
  color: "#ff1919",
  fontSize : "12px",
}
