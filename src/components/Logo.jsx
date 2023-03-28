export function Logomark(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
      />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg className="h-32 w-32" viewBox="0 0 109 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.0767 20.6963V34.5982H17.1375V20.6963H20.0767ZM25.3323 28.5704V34.5982H22.4406V24.1718H25.1965V26.0114H25.3187C25.5495 25.405 25.9364 24.9253 26.4795 24.5723C27.0225 24.2148 27.681 24.036 28.4548 24.036C29.1788 24.036 29.8101 24.1944 30.3486 24.5112C30.8872 24.828 31.3058 25.2805 31.6044 25.8688C31.9031 26.4526 32.0524 27.1495 32.0524 27.9595V34.5982H29.1607V28.4754C29.1653 27.8373 29.0024 27.3396 28.672 26.982C28.3417 26.62 27.8869 26.439 27.3076 26.439C26.9184 26.439 26.5745 26.5227 26.2758 26.6902C25.9817 26.8576 25.7509 27.102 25.5835 27.4233C25.4205 27.74 25.3368 28.1224 25.3323 28.5704ZM38.1735 34.7679C37.3816 34.7679 36.6643 34.5643 36.0217 34.157C35.3837 33.7452 34.8768 33.141 34.5012 32.3446C34.1301 31.5436 33.9446 30.5616 33.9446 29.3986C33.9446 28.2039 34.1369 27.2106 34.5216 26.4186C34.9062 25.6222 35.4176 25.0271 36.0557 24.6334C36.6983 24.2352 37.402 24.036 38.1667 24.036C38.7505 24.036 39.237 24.1356 39.6262 24.3347C40.0199 24.5293 40.3366 24.7737 40.5765 25.0678C40.8209 25.3575 41.0064 25.6425 41.1331 25.9231H41.2214V20.6963H44.1063V34.5982H41.2553V32.9284H41.1331C40.9974 33.218 40.805 33.5053 40.5561 33.7904C40.3118 34.071 39.9927 34.3041 39.599 34.4896C39.2098 34.6751 38.7347 34.7679 38.1735 34.7679ZM39.0899 32.4668C39.556 32.4668 39.9497 32.3401 40.271 32.0866C40.5969 31.8287 40.8458 31.4689 41.0177 31.0073C41.1942 30.5458 41.2824 30.005 41.2824 29.385C41.2824 28.765 41.1965 28.2265 41.0245 27.7695C40.8525 27.3124 40.6036 26.9594 40.2778 26.7105C39.952 26.4616 39.556 26.3372 39.0899 26.3372C38.6148 26.3372 38.2143 26.4662 37.8884 26.7241C37.5626 26.982 37.316 27.3396 37.1485 27.7966C36.9811 28.2537 36.8974 28.7831 36.8974 29.385C36.8974 29.9914 36.9811 30.5277 37.1485 30.9938C37.3205 31.4554 37.5671 31.8174 37.8884 32.0799C38.2143 32.3378 38.6148 32.4668 39.0899 32.4668ZM53.17 30.1588V24.1718H56.0617V34.5982H53.2854V32.7043H53.1768C52.9414 33.3153 52.55 33.8063 52.0024 34.1773C51.4594 34.5484 50.7964 34.734 50.0135 34.734C49.3166 34.734 48.7034 34.5756 48.174 34.2588C47.6445 33.942 47.2304 33.4918 46.9318 32.908C46.6376 32.3242 46.4883 31.6251 46.4838 30.8105V24.1718H49.3755V30.2946C49.38 30.91 49.5452 31.3965 49.871 31.754C50.1968 32.1115 50.6335 32.2903 51.1811 32.2903C51.5295 32.2903 51.8554 32.2111 52.1586 32.0527C52.4617 31.8898 52.7061 31.6499 52.8917 31.3332C53.0817 31.0164 53.1745 30.625 53.17 30.1588ZM67.0498 27.145L64.4024 27.3079C64.3572 27.0816 64.2599 26.878 64.1106 26.697C63.9612 26.5114 63.7644 26.3643 63.52 26.2557C63.2802 26.1426 62.9928 26.086 62.6579 26.086C62.2099 26.086 61.832 26.1811 61.5243 26.3711C61.2166 26.5567 61.0627 26.8056 61.0627 27.1178C61.0627 27.3667 61.1623 27.5771 61.3614 27.7491C61.5605 27.9211 61.9022 28.0591 62.3864 28.1632L64.2735 28.5433C65.2871 28.7515 66.0429 29.0863 66.5407 29.5479C67.0385 30.0095 67.2873 30.6159 67.2873 31.3671C67.2873 32.0504 67.086 32.65 66.6832 33.1659C66.285 33.6818 65.7374 34.0846 65.0405 34.3742C64.3481 34.6593 63.5494 34.8018 62.6443 34.8018C61.2641 34.8018 60.1645 34.5145 59.3454 33.9398C58.5308 33.3605 58.0534 32.5731 57.9131 31.5775L60.7573 31.4282C60.8433 31.8491 61.0514 32.1704 61.3818 32.3921C61.7121 32.6093 62.1352 32.7179 62.6511 32.7179C63.158 32.7179 63.5652 32.6206 63.873 32.426C64.1852 32.2269 64.3436 31.9712 64.3481 31.659C64.3436 31.3965 64.2327 31.1816 64.0155 31.0141C63.7983 30.8422 63.4634 30.7109 63.0109 30.6204L61.2053 30.2607C60.1871 30.057 59.4291 29.704 58.9313 29.2017C58.438 28.6994 58.1914 28.0591 58.1914 27.2807C58.1914 26.611 58.3724 26.034 58.7344 25.5498C59.101 25.0656 59.6146 24.6922 60.2753 24.4298C60.9405 24.1673 61.7189 24.036 62.6104 24.036C63.9273 24.036 64.9636 24.3144 65.7193 24.871C66.4796 25.4276 66.9231 26.1856 67.0498 27.145ZM78.5147 34.5982H73.5866V20.6963H78.5555C79.9538 20.6963 81.1575 20.9747 82.1667 21.5313C83.1758 22.0834 83.9519 22.8776 84.495 23.9139C85.0425 24.9502 85.3163 26.1901 85.3163 27.6337C85.3163 29.0818 85.0425 30.3263 84.495 31.3671C83.9519 32.4079 83.1713 33.2067 82.1531 33.7633C81.1394 34.3199 79.9266 34.5982 78.5147 34.5982ZM76.5258 32.0799H78.3925C79.2614 32.0799 79.9923 31.926 80.5851 31.6183C81.1824 31.306 81.6304 30.8241 81.9291 30.1724C82.2323 29.5162 82.3839 28.67 82.3839 27.6337C82.3839 26.6064 82.2323 25.767 81.9291 25.1153C81.6304 24.4637 81.1847 23.984 80.5919 23.6763C79.999 23.3686 79.2682 23.2147 78.3993 23.2147H76.5258V32.0799Z" fill="black"/>
    <path d="M89.1295 34.7747C88.6815 34.7747 88.2968 34.6163 87.9755 34.2995C87.6588 33.9782 87.5004 33.5936 87.5004 33.1456C87.5004 32.7021 87.6588 32.322 87.9755 32.0052C88.2968 31.6884 88.6815 31.53 89.1295 31.53C89.5639 31.53 89.9441 31.6884 90.2699 32.0052C90.5957 32.322 90.7586 32.7021 90.7586 33.1456C90.7586 33.4442 90.6817 33.718 90.5278 33.9669C90.3785 34.2113 90.1816 34.4081 89.9373 34.5575C89.6929 34.7023 89.4236 34.7747 89.1295 34.7747Z" fill="#06b6d4"/>
    </svg>
  )
}


export function LogoWhite(props) {
  return (
    <svg className="h-32 w-32" viewBox="0 0 109 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.0767 20.6963V34.5982H17.1375V20.6963H20.0767ZM25.3323 28.5704V34.5982H22.4406V24.1718H25.1965V26.0114H25.3187C25.5495 25.405 25.9364 24.9253 26.4795 24.5723C27.0225 24.2148 27.681 24.036 28.4548 24.036C29.1788 24.036 29.8101 24.1944 30.3486 24.5112C30.8872 24.828 31.3058 25.2805 31.6044 25.8688C31.9031 26.4526 32.0524 27.1495 32.0524 27.9595V34.5982H29.1607V28.4754C29.1653 27.8373 29.0024 27.3396 28.672 26.982C28.3417 26.62 27.8869 26.439 27.3076 26.439C26.9184 26.439 26.5745 26.5227 26.2758 26.6902C25.9817 26.8576 25.7509 27.102 25.5835 27.4233C25.4205 27.74 25.3368 28.1224 25.3323 28.5704ZM38.1735 34.7679C37.3816 34.7679 36.6643 34.5643 36.0217 34.157C35.3837 33.7452 34.8768 33.141 34.5012 32.3446C34.1301 31.5436 33.9446 30.5616 33.9446 29.3986C33.9446 28.2039 34.1369 27.2106 34.5216 26.4186C34.9062 25.6222 35.4176 25.0271 36.0557 24.6334C36.6983 24.2352 37.402 24.036 38.1667 24.036C38.7505 24.036 39.237 24.1356 39.6262 24.3347C40.0199 24.5293 40.3366 24.7737 40.5765 25.0678C40.8209 25.3575 41.0064 25.6425 41.1331 25.9231H41.2214V20.6963H44.1063V34.5982H41.2553V32.9284H41.1331C40.9974 33.218 40.805 33.5053 40.5561 33.7904C40.3118 34.071 39.9927 34.3041 39.599 34.4896C39.2098 34.6751 38.7347 34.7679 38.1735 34.7679ZM39.0899 32.4668C39.556 32.4668 39.9497 32.3401 40.271 32.0866C40.5969 31.8287 40.8458 31.4689 41.0177 31.0073C41.1942 30.5458 41.2824 30.005 41.2824 29.385C41.2824 28.765 41.1965 28.2265 41.0245 27.7695C40.8525 27.3124 40.6036 26.9594 40.2778 26.7105C39.952 26.4616 39.556 26.3372 39.0899 26.3372C38.6148 26.3372 38.2143 26.4662 37.8884 26.7241C37.5626 26.982 37.316 27.3396 37.1485 27.7966C36.9811 28.2537 36.8974 28.7831 36.8974 29.385C36.8974 29.9914 36.9811 30.5277 37.1485 30.9938C37.3205 31.4554 37.5671 31.8174 37.8884 32.0799C38.2143 32.3378 38.6148 32.4668 39.0899 32.4668ZM53.17 30.1588V24.1718H56.0617V34.5982H53.2854V32.7043H53.1768C52.9414 33.3153 52.55 33.8063 52.0024 34.1773C51.4594 34.5484 50.7964 34.734 50.0135 34.734C49.3166 34.734 48.7034 34.5756 48.174 34.2588C47.6445 33.942 47.2304 33.4918 46.9318 32.908C46.6376 32.3242 46.4883 31.6251 46.4838 30.8105V24.1718H49.3755V30.2946C49.38 30.91 49.5452 31.3965 49.871 31.754C50.1968 32.1115 50.6335 32.2903 51.1811 32.2903C51.5295 32.2903 51.8554 32.2111 52.1586 32.0527C52.4617 31.8898 52.7061 31.6499 52.8917 31.3332C53.0817 31.0164 53.1745 30.625 53.17 30.1588ZM67.0498 27.145L64.4024 27.3079C64.3572 27.0816 64.2599 26.878 64.1106 26.697C63.9612 26.5114 63.7644 26.3643 63.52 26.2557C63.2802 26.1426 62.9928 26.086 62.6579 26.086C62.2099 26.086 61.832 26.1811 61.5243 26.3711C61.2166 26.5567 61.0627 26.8056 61.0627 27.1178C61.0627 27.3667 61.1623 27.5771 61.3614 27.7491C61.5605 27.9211 61.9022 28.0591 62.3864 28.1632L64.2735 28.5433C65.2871 28.7515 66.0429 29.0863 66.5407 29.5479C67.0385 30.0095 67.2873 30.6159 67.2873 31.3671C67.2873 32.0504 67.086 32.65 66.6832 33.1659C66.285 33.6818 65.7374 34.0846 65.0405 34.3742C64.3481 34.6593 63.5494 34.8018 62.6443 34.8018C61.2641 34.8018 60.1645 34.5145 59.3454 33.9398C58.5308 33.3605 58.0534 32.5731 57.9131 31.5775L60.7573 31.4282C60.8433 31.8491 61.0514 32.1704 61.3818 32.3921C61.7121 32.6093 62.1352 32.7179 62.6511 32.7179C63.158 32.7179 63.5652 32.6206 63.873 32.426C64.1852 32.2269 64.3436 31.9712 64.3481 31.659C64.3436 31.3965 64.2327 31.1816 64.0155 31.0141C63.7983 30.8422 63.4634 30.7109 63.0109 30.6204L61.2053 30.2607C60.1871 30.057 59.4291 29.704 58.9313 29.2017C58.438 28.6994 58.1914 28.0591 58.1914 27.2807C58.1914 26.611 58.3724 26.034 58.7344 25.5498C59.101 25.0656 59.6146 24.6922 60.2753 24.4298C60.9405 24.1673 61.7189 24.036 62.6104 24.036C63.9273 24.036 64.9636 24.3144 65.7193 24.871C66.4796 25.4276 66.9231 26.1856 67.0498 27.145ZM78.5147 34.5982H73.5866V20.6963H78.5555C79.9538 20.6963 81.1575 20.9747 82.1667 21.5313C83.1758 22.0834 83.9519 22.8776 84.495 23.9139C85.0425 24.9502 85.3163 26.1901 85.3163 27.6337C85.3163 29.0818 85.0425 30.3263 84.495 31.3671C83.9519 32.4079 83.1713 33.2067 82.1531 33.7633C81.1394 34.3199 79.9266 34.5982 78.5147 34.5982ZM76.5258 32.0799H78.3925C79.2614 32.0799 79.9923 31.926 80.5851 31.6183C81.1824 31.306 81.6304 30.8241 81.9291 30.1724C82.2323 29.5162 82.3839 28.67 82.3839 27.6337C82.3839 26.6064 82.2323 25.767 81.9291 25.1153C81.6304 24.4637 81.1847 23.984 80.5919 23.6763C79.999 23.3686 79.2682 23.2147 78.3993 23.2147H76.5258V32.0799Z" fill="white"/>
    <path d="M89.1295 34.7747C88.6815 34.7747 88.2968 34.6163 87.9755 34.2995C87.6588 33.9782 87.5004 33.5936 87.5004 33.1456C87.5004 32.7021 87.6588 32.322 87.9755 32.0052C88.2968 31.6884 88.6815 31.53 89.1295 31.53C89.5639 31.53 89.9441 31.6884 90.2699 32.0052C90.5957 32.322 90.7586 32.7021 90.7586 33.1456C90.7586 33.4442 90.6817 33.718 90.5278 33.9669C90.3785 34.2113 90.1816 34.4081 89.9373 34.5575C89.6929 34.7023 89.4236 34.7747 89.1295 34.7747Z" fill="#06b6d4"/>
    </svg>
  )
}
