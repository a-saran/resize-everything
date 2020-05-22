import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import isUrl from "is-url";
import { SET_LINK } from '../../actions/types';


const Input = () => {
  const [error, setError] = useState(false)
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value;

    if(!value.length) {
      setError(true)
    }

    if(isUrl(value)) {
      dispatch({ type:SET_LINK, payload: { link: value} })
    } else {
      setError(true)
    }
  }

  return (
    <div className={`input_container${error ? ' has-error': ''}`} onBlur={() => setError(false)}>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Please enter a valid Url' ref={inputRef}/>
        <button>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
        </button>
      </form>
    </div>
  )
}

export default Input
