import React, { memo } from 'react'

export const DragIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0V0z"/><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
)

export const GitIcon = memo(() => (
  <svg enableBackground="new 0 0 24 24" height="30px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
    <path fill="#9a9a9a" d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
  </svg>
))

export const SendArrow = memo(() => (
  <svg version="1.1" x="0px" y="0px"
    viewBox="0 0 52.495 52.495" style={{enableBackground:'new 0 0 52.495 52.495'}} xmlSpace="preserve">
    <g>
      <path fill='#9a9a9a' d="M31.113,16.038V3.99l19.971,20.08l-19.971,20.08V32.102c0,0-17.735-4.292-29.849,16.064
        c0,0-3.02-15.536,10.51-26.794C11.774,21.371,17.903,15.64,31.113,16.038z"/>
      <path fill='#9a9a9a' d="M0.783,50.929l-0.5-2.573c-0.031-0.161-2.974-16.25,10.852-27.753
        c0.202-0.191,6.116-5.585,18.674-5.585c0.102,0,0.203,0,0.305,0.001V1.566L52.495,24.07L30.113,46.574V32.937
        c-0.662-0.098-1.725-0.213-3.071-0.213c-5.761,0-16.657,2.073-24.918,15.953L0.783,50.929z M29.808,17.018
        c-11.776,0-17.297,5.033-17.352,5.084C2.911,30.046,1.878,40.274,2.004,45.149C14.365,27.091,31.127,31.077,31.348,31.13
        l0.765,0.185v10.411L49.674,24.07L32.113,6.413v10.654l-1.03-0.03C30.65,17.024,30.226,17.018,29.808,17.018z"/>
    </g>
  </svg>
))

export const PlusIcon = memo(({ color, width }) => (
  <svg fill={color} version="1.1" width={width || '20px'}  x="0px" y="0px"
    viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
    <g>
      <g>
        <path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
          c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659S472.341,136.705,472.341,256S375.295,472.341,256,472.341z
          "/>
      </g>
    </g>
    <g>
      <g>
        <path d="M355.148,234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83,8.884-19.83,19.83v79.318h-79.318
          c-10.966,0-19.83,8.884-19.83,19.83s8.864,19.83,19.83,19.83h79.318v79.318c0,10.946,8.864,19.83,19.83,19.83
          s19.83-8.884,19.83-19.83v-79.318h79.318c10.966,0,19.83-8.884,19.83-19.83S366.114,234.386,355.148,234.386z"/>
      </g>
    </g>
  </svg>
))

export const DownloadIcon = memo(() => (
  <svg fill='#9a9a9a'  enableBackground="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20" >
    <g>
      <path d="m361 116c5.522 0 10-4.477 10-10v-60c0-5.523-4.478-10-10-10h-210c-5.522 0-10 4.477-10 10v60c0 5.523 4.478 10 10 10s10-4.477 10-10v-50h190v50c0 5.523 4.478 10 10 10z"/><path d="m502 396h-35v-230c0-5.523-4.478-10-10-10h-146v-50c0-5.523-4.478-10-10-10h-90c-5.522 0-10 4.477-10 10v50h-146c-5.522 0-10 4.477-10 10v230h-35c-5.522 0-10 4.477-10 10 0 38.598 31.402 70 70 70h141c5.522 0 10-4.477 10-10s-4.478-10-10-10h-141c-24.146 0-44.35-17.206-48.995-40.01h469.99c-4.645 22.804-24.849 40.01-48.995 40.01h-141c-5.522 0-10 4.477-10 10s4.478 10 10 10h141c38.598 0 70-31.402 70-70 0-5.523-4.478-10-10-10zm-291-160c5.522 0 10-4.477 10-10v-110h70v110c0 5.523 4.478 10 10 10h25l-70 93.333-70-93.333zm236 160h-382v-220h136v40h-35c-3.788 0-7.25 2.14-8.944 5.528-1.693 3.388-1.328 7.442.944 10.472l90 120c1.889 2.518 4.853 4 8 4s6.111-1.482 8-4l90-120c2.272-3.03 2.638-7.084.944-10.472s-5.156-5.528-8.944-5.528h-35v-40h136z"/>
      <circle cx="256" cy="466" r="10"/>
    </g>
  </svg>
))

export const MinusIcon = memo(() => (
  <svg version="1.1" x="0px" y="0px" width='20px' viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
    <g transform="translate(1 1)">
      <g>
        <g>
          <path d="M255-1C113.618-1-1,113.618-1,255s114.618,256,256,256s256-114.618,256-256S396.382-1,255-1z M255,468.333
            c-117.818,0-213.333-95.515-213.333-213.333S137.182,41.667,255,41.667S468.333,137.182,468.333,255S372.818,468.333,255,468.333
            z"/>
          <path d="M382.996,233.667H127.038c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333h255.957
            c11.782,0,21.333-9.551,21.333-21.333S394.778,233.667,382.996,233.667z"/>
        </g>
      </g>
    </g>
  </svg>
))

export const RefreshIcon = memo(() => (
  <svg version="1.1" width='20px' x="0px" y="0px"
    viewBox="0 0 477.867 477.867" style={{ enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
    <g>
      <g>
        <path d="M409.6,0c-9.426,0-17.067,7.641-17.067,17.067v62.344C304.667-5.656,164.478-3.386,79.411,84.479
          c-40.09,41.409-62.455,96.818-62.344,154.454c0,9.426,7.641,17.067,17.067,17.067S51.2,248.359,51.2,238.933
          c0.021-103.682,84.088-187.717,187.771-187.696c52.657,0.01,102.888,22.135,138.442,60.976l-75.605,25.207
          c-8.954,2.979-13.799,12.652-10.82,21.606s12.652,13.799,21.606,10.82l102.4-34.133c6.99-2.328,11.697-8.88,11.674-16.247v-102.4
          C426.667,7.641,419.026,0,409.6,0z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M443.733,221.867c-9.426,0-17.067,7.641-17.067,17.067c-0.021,103.682-84.088,187.717-187.771,187.696
          c-52.657-0.01-102.888-22.135-138.442-60.976l75.605-25.207c8.954-2.979,13.799-12.652,10.82-21.606
          c-2.979-8.954-12.652-13.799-21.606-10.82l-102.4,34.133c-6.99,2.328-11.697,8.88-11.674,16.247v102.4
          c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067v-62.345c87.866,85.067,228.056,82.798,313.122-5.068
          c40.09-41.409,62.455-96.818,62.344-154.454C460.8,229.508,453.159,221.867,443.733,221.867z"/>
      </g>
    </g>
  </svg>
))

export const RemoveIcon = memo(({ color1, color2, width }) => (
  <svg viewBox="0 0 512 512" width={width || "20"}>
    <path fill={color1 || "#f44336"} d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" />
    <path fill={color2 || "#fafafa"} d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" />
  </svg>
))

export const AddIcon = memo(() => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <g filter="url(#filter0_i)">
      <path fillRule="evenodd" clipRule="evenodd" d="M100 50C100 63.2608 94.7322 75.9785 85.3553 85.3553C75.9785 94.7322 63.2608 100 50 100C36.7392 100 24.0215 94.7322 14.6447 85.3553C5.26784 75.9785 0 63.2608 0 50C0 36.7392 5.26784 24.0215 14.6447 14.6447C24.0215 5.26784 36.7392 0 50 0C63.2608 0 75.9785 5.26784 85.3553 14.6447C94.7322 24.0215 100 36.7392 100 50ZM53.125 25C53.125 24.1712 52.7958 23.3763 52.2097 22.7903C51.6237 22.2042 50.8288 21.875 50 21.875C49.1712 21.875 48.3763 22.2042 47.7903 22.7903C47.2042 23.3763 46.875 24.1712 46.875 25V46.875H25C24.1712 46.875 23.3763 47.2042 22.7903 47.7903C22.2042 48.3763 21.875 49.1712 21.875 50C21.875 50.8288 22.2042 51.6237 22.7903 52.2097C23.3763 52.7958 24.1712 53.125 25 53.125H46.875V75C46.875 75.8288 47.2042 76.6237 47.7903 77.2097C48.3763 77.7958 49.1712 78.125 50 78.125C50.8288 78.125 51.6237 77.7958 52.2097 77.2097C52.7958 76.6237 53.125 75.8288 53.125 75V53.125H75C75.8288 53.125 76.6237 52.7958 77.2097 52.2097C77.7958 51.6237 78.125 50.8288 78.125 50C78.125 49.1712 77.7958 48.3763 77.2097 47.7903C76.6237 47.2042 75.8288 46.875 75 46.875H53.125V25Z" fill="#26282B"/>
    </g>
    <defs>
      <filter id="filter0_i" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="20"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0963542 0 0 0 0 0.10026 0 0 0 0 0.104167 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
      </filter>
    </defs>
  </svg>
))

export const AppleIcon = memo(() => (
  <svg width="60" viewBox="0 0 496.255 608.728"><path fill="#999" d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z" /></svg>
))

export const LinuxIcon = memo(() => (
  <svg  width="60"  viewBox="0 0 192.756 192.756">
    <g fillRule="evenodd" clipRule="evenodd">
      <path fill="transparent" d="M0 0h192.756v192.756H0V0z"/>
      <path fill="#999" d="M180.389 113.324c-7.82 36.426-40.312 63.877-79.02 63.877-44.515 0-80.821-36.307-80.821-80.822 0-44.514 36.306-80.821 80.821-80.821 38.459 0 70.785 27.101 78.869 63.181-8.16-38.324-42.314-67.223-83.01-67.223-46.74 0-84.862 38.122-84.862 84.862 0 46.741 38.122 84.862 84.862 84.862 40.942 0 75.268-29.248 83.161-67.916z"/>
      <path fill="#999" d="M87.787 138.574c4.676-.482 5.293-5.43 3.09-7.592-1.814-1.779-11.825-9.211-14.437-12.133-1.212-1.355-2.856-2.021-3.552-3.545-1.601-3.506-2.723-8.51-.692-12.102.368-.65.604-.359.323.994-1.595 7.666 3.397 13.93 4.496 10.717.759-2.219.056-6.188.461-9.34.718-5.578 5.796-16.29 8.026-16.902-3.439-6.372 4.034-11.359 3.943-16.951-.061-3.637 3.193 4.471 6.464 6.19 3.652 1.919 7.666-3.618 13.365-6.428 1.611-.795 3.68-1.708 3.541-2.386-.67-3.27-7.484 4.034-13.572 4.28-2.778.111-3.809-.546-4.882-1.582-3.244-3.136.331-.519 5.153-1.391 2.145-.388 2.865-.746 5.139-1.665 2.275-.919 4.875-2.28 7.449-2.979 1.791-.487 1.643-1.833.945-2.238-.402-.233-.996-.21-1.467.604-1.105 1.91-6.299 3.014-7.918 3.509-2.082.636-4.385 1.231-7.442 1.107-4.646-.188-3.563-2.318-6.887-4.224-.975-.559-.711-2.026.583-3.321.678-.679 2.538-1.062 3.46-2.606.129-.217 1.317-1.459 2.249-2.103.322-.223.35-5.896-2.561-6.013-2.473-.1-3.176 1.817-3.072 3.728.103 1.909 1.115 3.484 1.789 3.477 1.298-.014.083 1.42-.628 1.651-1.08.352-2.56-4.251-2.39-6.461.178-2.302 1.376-6.378 4.29-6.299 2.624.071 4.525 3.36 4.429 9.034-.018.962 4.254-.459 5.68 1.047 1.018 1.077-3.492-10.052 6.553-10.818 2.646.506 5.188 1.387 6.244 7.471-.391.633.658 4.877-.975 5.381-1.994.615-3.225-.089-2.072-1.987.789-1.907.018-6.757-4.016-6.466-4.035.291-3.5 7.45-2.395 7.592 1.107.141 3.893 2.118 5.838 2.497 6.381 1.242 1.693 4.901 2.521 9.33.936 5.002 4.23 3.681 7.191 16.927.619.807 3.07 1.57 5.461 11.747 2.15 9.154-.895 15.812 4.275 15.266 1.164-.123 2.865-.449 3.605-3.043 1.936-6.779-.969-14.86-3.9-20.312-1.707-3.179-3.316-5.343-4.164-6.087 3.359 1.986 7.654 8.328 8.645 13.038 1.303 6.186 2.23 8.803.262 15.344 1.137.568 3.965 1.77 3.965 3.119-2.945-2.422-11.965-2.852-12.197 2.939-1.539.031-2.701.156-3.691 1.332-3.627 4.303-.26 12.945-.627 17.578-.324 4.078-1.455 8.119-2.094 12.215-2.158-.082-1.947-1.662-1.254-3.879.611-1.955 1.596-4.406 1.66-6.756.059-2.127-.174-3.455-.709-3.785-.537-.33-1.377.338-2.537 2.207-2.477 3.988-7.842 5.742-12.852 6.371-5.01.627-9.667.129-12.133-2.633-.843-.945-2.241.258-2.407.508-.223.336.816.988 1.599 2.426 1.144 2.098 2.231 5.281-.478 6.734.035-7.386-2.303-7.819-4.693-12.333zm-1.79-.195c1.795 2.826 8.121 14.725-2.968 16.27-3.709.516-9.68-2.158-15.466-3.574-5.198-1.271-10.477-2.023-13.432-2.855-1.779-.498-2.522-1.137-2.677-1.883-.41-1.975 2.16-4.744 2.29-7.082s-.853-3.555-1.658-5.461c-.807-1.914-1.016-3.346-.371-4.166.502-.637 1.522-.904 3.182-.742 2.104.209 4.644-.223 6.009-1.055 2.299-1.404 3.38-4.277 2.346-7.74 0 3.389-1.111 4.672-3.896 6.221-2.625 1.461-6.677.279-8.539 1.896-2.241 1.943.8 6.965.551 10.648-.191 2.832-3.146 6.021-1.828 8.861 1.326 2.857 7.508 3.17 13.953 4.516 9.162 1.918 14.503 5.254 18.736 5.41 6.175.23 7.121-6.109 16.817-6.195 2.828-.148 5.594-.236 8.357-.271 3.131-.039 6.258-.014 9.469.064 6.453.156 4.234 3.523 8.42 5.674 3.533 1.814 9.883 1.098 11.402-.352 2.057-1.961 7.576-6.678 11.805-8.809 5.271-2.656 17.65-7.229 8.664-12.805-2.094-1.301-7.047-2.674-7.463-12.18-1.875 1.666-1.658 10.523 3.574 12.281 5.844 1.963 9.496 5.25-1.369 8.967-7.195 2.459-8.416 3.217-14.111 7.957-5.764 4.797-14.314 2.893-12.822-7.207.779-5.262 1.227-9.609-.082-14.184-.641-2.232-.959-5.1-.521-7.109.85-3.908 2.965-5.084 5.039-1.332 1.301 2.355 1.758 5.107 6.418 5.332 7.32.35 8.77-7.074 11.109-7.412 1.561-.225 3.121-4.643 1.932-11.787-1.273-7.648-5.773-19.727-11.545-25.852-4.797-5.09-7.82-9.554-9.723-15.924-1.598-5.352-2.488-10.561-2.16-15.541.426-6.453-3.152-15.433-8.85-19.657-3.566-2.645-9.158-4.062-14.219-4.006-2.84.031-5.511.445-7.565 1.56-8.449 4.587-9.629 11.139-9.502 18.617.119 7.024.358 15.04 1.156 22.666-.945 3.501-5.864 10.139-9.014 14.178-4.235 4.184-6.374 12.269-9.114 19.333-1.462 3.766-3.924 5.467-4.131 10.309-.058 1.355-.011 4.857 1.283 3.855 4.952-3.831 11.151 5.828 20.514 20.566zm25.708-101.252c-.266.798-1.365 1.463-.668 2.022.697.559 1.098-.781 2.502-1.283.363-.13 2.051.054 2.361-.748.135-.35-.871-.749-1.469-1.322-.6-.572-1.188-1.081-1.75-1.045-1.454.093-.74 1.669-.976 2.376zm8.607 29.128c.523-.549.793.948 2.199 1.835 1.115.704 2.199.182 2.48 1.607.201 1.022-.436 2.13-1.293 1.986-1.489-.251-4.93-3.804-3.386-5.428zm-23.23-8.989c-2.317-.173-2.476 1.502-1.709 1.474.783-.028.302-1.325 1.709-1.474zm-3.974-4.278c.274-.06.663.407.542 1.061-.168.908-.095 1.477.534 1.479.104 0 .216-.02.255-.255.302-1.809-.638-3.137-1.022-3.235-.885-.226-.778 1.05-.309.95zm16.863-.765c.588.175 1.154 1.192 1.277 2.291.012.103.768-.158.773-.398.049-1.769-1.463-2.601-1.857-2.565-.91.082-.652.534-.193.672zm-8.645 5.259c2.107-.977 2.844.536 2.117.779-.742.249-.748-1.135-2.117-.779zM75.884 93.374c-.996-.121.29-.869.835-1.81.599-1.036.483-2.329 1.113-2.138.629.191.279.915-.152 2.102-.368 1.011-1.429 1.89-1.796 1.846z"/></g></svg>
))

export const WindowsIcon = memo(() => (
  <svg width="60" viewBox="0 0 256 257" preserveAspectRatio="xMidYMid"><path fill="#999" d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" /></svg>
))

export const RotateIcon = memo(() => (
  <svg version="1.1" id="Capa_1" width='20px' x="0px" y="0px"
	 viewBox="0 0 512 512" style={{enableBackground:'new 0 0 52.495 52.495'}} xmlSpace="preserve">
    <g>
      <g>
        <path d="M426.576,11.533c-8.157,0-14.769,6.613-14.769,14.769v26.537C367.315,18.574,313.088,0,256,0
          C187.62,0,123.333,26.629,74.98,74.98C26.628,123.332,0,187.62,0,256c0,68.382,26.629,132.67,74.982,181.022
          c2.884,2.885,6.664,4.326,10.443,4.326s7.56-1.442,10.444-4.326c5.767-5.768,5.767-15.119,0-20.887
          C53.095,373.361,29.538,316.492,29.538,256C29.538,131.129,131.129,29.538,256,29.538c47.289,0,92.364,14.397,130.222,41.117
          h-18.723c-8.157,0-14.769,6.613-14.769,14.769s6.613,14.769,14.769,14.769h59.077c0.472,0,0.937-0.028,1.398-0.071
          c0.005,0,0.01,0,0.015-0.001c0.41-0.039,0.812-0.103,1.212-0.174c0.07-0.013,0.141-0.019,0.211-0.032
          c0.39-0.076,0.771-0.175,1.15-0.281c0.082-0.023,0.165-0.039,0.247-0.064c0.368-0.11,0.727-0.241,1.082-0.379
          c0.093-0.035,0.187-0.065,0.28-0.102c0.35-0.143,0.687-0.306,1.023-0.475c0.096-0.048,0.194-0.089,0.289-0.139
          c0.352-0.186,0.69-0.392,1.024-0.606c0.072-0.046,0.148-0.086,0.22-0.133c1.652-1.096,3.07-2.514,4.165-4.166
          c0.048-0.072,0.088-0.148,0.134-0.221c0.213-0.334,0.418-0.672,0.605-1.022c0.05-0.096,0.092-0.194,0.14-0.29
          c0.168-0.335,0.331-0.672,0.474-1.021c0.037-0.093,0.067-0.187,0.102-0.281c0.138-0.355,0.269-0.714,0.379-1.082
          c0.024-0.079,0.039-0.16,0.061-0.239c0.107-0.381,0.207-0.766,0.283-1.159c0.012-0.062,0.018-0.126,0.029-0.188
          c0.156-0.86,0.249-1.74,0.249-2.644V26.302C441.345,18.145,434.732,11.533,426.576,11.533z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M169.63,256c13.192-4.811,22.129-17.367,22.129-31.665c0-18.593-15.126-33.718-33.717-33.718h-48.537
          c-8.157,0-14.769,6.613-14.769,14.769s6.613,14.769,14.769,14.769h48.537c2.304,0,4.179,1.875,4.179,4.18
          c0,1.921-1.302,3.588-3.166,4.054l-32.225,8.057c-8.99,2.247-15.267,10.288-15.267,19.554s6.278,17.308,15.267,19.554
          l32.225,8.057c1.864,0.467,3.165,2.133,3.165,4.054c0,2.305-1.875,4.18-4.179,4.18h-48.537c-8.157,0-14.769,6.613-14.769,14.769
          s6.613,14.769,14.769,14.769h48.537c18.592,0,33.718-15.126,33.718-33.718C191.759,273.367,182.82,260.811,169.63,256z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M264.435,241.231h-27.409v-10.537c0-5.81,4.727-10.538,10.538-10.538h42.178c8.157,0,14.769-6.613,14.769-14.769
          s-6.613-14.769-14.769-14.769h-42.178c-22.098,0-40.077,17.979-40.077,40.077v50.613c0,22.098,17.978,40.077,40.077,40.077h16.871
          c22.098,0,40.077-17.979,40.077-40.077S286.534,241.231,264.435,241.231z M264.435,291.845h-16.871
          c-5.81,0-10.538-4.728-10.538-10.538v-10.537h27.409c5.81,0,10.538,4.727,10.538,10.537S270.246,291.845,264.435,291.845z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M377.189,190.617h-16.871c-22.098,0-40.076,17.979-40.076,40.077v50.613c0,22.098,17.978,40.077,40.076,40.077h16.871
          c22.098,0,40.076-17.979,40.076-40.077v-50.613C417.265,208.596,399.287,190.617,377.189,190.617z M387.727,281.307
          c0,5.81-4.727,10.538-10.537,10.538h-16.871c-5.81,0-10.537-4.728-10.537-10.538v-50.613c0-5.81,4.727-10.538,10.537-10.538
          h16.871c5.81,0,10.537,4.728,10.537,10.538V281.307z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M261.816,482.389c-3.804,0.096-7.697,0.096-11.5,0.003c-8.151-0.167-14.929,6.243-15.133,14.397
          c-0.203,8.155,6.243,14.929,14.398,15.132c2.124,0.053,4.283,0.08,6.419,0.08c2.183,0,4.39-0.028,6.562-0.083
          c8.155-0.206,14.598-6.983,14.392-15.137C276.748,488.626,269.945,482.197,261.816,482.389z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M504.892,195.855c-1.008-4.188-2.139-8.406-3.359-12.535c-2.312-7.823-10.527-12.287-18.35-9.977
          c-7.823,2.313-12.29,10.529-9.977,18.35c1.079,3.65,2.078,7.377,2.97,11.078c1.63,6.768,7.678,11.315,14.347,11.315
          c1.144,0,2.308-0.135,3.47-0.415C501.921,211.762,506.802,203.785,504.892,195.855z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M147.773,454.979c-3.348-1.825-6.69-3.758-9.934-5.747c-6.953-4.263-16.047-2.084-20.311,4.87
          c-4.264,6.953-2.083,16.047,4.87,20.311c3.671,2.251,7.452,4.439,11.239,6.502c2.245,1.223,4.666,1.804,7.055,1.804
          c5.231,0,10.301-2.786,12.981-7.705C157.577,467.853,154.934,458.882,147.773,454.979z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M202.957,476.219c-3.71-0.89-7.442-1.886-11.09-2.963c-7.825-2.304-16.035,2.168-18.341,9.992
          c-2.306,7.824,2.168,16.036,9.992,18.342c4.128,1.216,8.35,2.343,12.547,3.351c1.158,0.278,2.318,0.412,3.458,0.412
          c6.672,0,12.724-4.554,14.35-11.327C215.776,486.095,210.889,478.123,202.957,476.219z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M480.818,133.459c-2.062-3.775-4.252-7.552-6.506-11.226c-4.267-6.951-13.363-9.128-20.314-4.86
          c-6.951,4.267-9.127,13.362-4.86,20.314c1.995,3.25,3.932,6.591,5.755,9.931c2.683,4.912,7.747,7.693,12.975,7.693
          c2.393,0,4.82-0.583,7.067-1.811C482.094,149.59,484.727,140.618,480.818,133.459z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M338.575,483.214c-2.308-7.823-10.521-12.292-18.345-9.985c-3.663,1.081-7.39,2.078-11.078,2.965
          c-7.931,1.905-12.817,9.879-10.912,17.81c1.627,6.772,7.677,11.324,14.349,11.324c1.141,0,2.302-0.134,3.461-0.413
          c4.178-1.003,8.397-2.132,12.541-3.355C336.413,499.251,340.883,491.036,338.575,483.214z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M494.043,298.031c-7.934-1.9-15.904,2.991-17.803,10.924c-0.887,3.703-1.882,7.433-2.956,11.084
          c-2.303,7.825,2.174,16.034,9.999,18.337c1.391,0.41,2.794,0.605,4.176,0.605c6.382,0,12.269-4.17,14.162-10.604
          c1.216-4.131,2.341-8.352,3.345-12.543C506.866,307.902,501.975,299.932,494.043,298.031z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M475.062,358.231c-7.163-3.901-16.133-1.258-20.035,5.907c-1.823,3.345-3.756,6.693-5.75,9.95
          c-4.259,6.956-2.072,16.049,4.885,20.308c2.406,1.473,5.068,2.175,7.697,2.175c4.97,0,9.825-2.51,12.611-7.06
          c2.253-3.68,4.44-7.464,6.498-11.246C484.87,371.102,482.225,362.132,475.062,358.231z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M441.074,411.432c-5.914-5.618-15.262-5.38-20.881,0.534c-2.625,2.763-5.355,5.494-8.116,8.121
          c-5.909,5.623-6.142,14.971-0.519,20.881c2.904,3.051,6.799,4.588,10.703,4.588c3.657,0,7.32-1.35,10.178-4.069
          c3.118-2.968,6.203-6.053,9.169-9.175C447.226,426.4,446.988,417.052,441.074,411.432z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M511.916,249.37c-0.205-8.026-6.774-14.393-14.757-14.393c-0.127,0-0.255,0.002-0.383,0.005
          c-8.155,0.208-14.597,6.986-14.389,15.14c0.049,1.945,0.075,3.922,0.075,5.879c0,1.868-0.023,3.756-0.068,5.614
          c-0.198,8.155,6.253,14.925,14.407,15.123c0.122,0.003,0.243,0.004,0.364,0.004c7.991,0,14.563-6.379,14.758-14.412
          c0.05-2.095,0.077-4.225,0.077-6.33C512,253.794,511.971,251.563,511.916,249.37z"/>
      </g>
    </g>
    <g>
      <g>
        <path d="M394.534,454.059c-4.264-6.951-13.358-9.131-20.312-4.866c-3.241,1.99-6.578,3.921-9.919,5.744
          c-7.16,3.907-9.797,12.879-5.89,20.039c2.681,4.914,7.748,7.698,12.977,7.698c2.391,0,4.816-0.582,7.062-1.808
          c3.777-2.061,7.55-4.247,11.216-6.495C396.622,470.107,398.8,461.013,394.534,454.059z"/>
      </g>
    </g>
  </svg>
))
