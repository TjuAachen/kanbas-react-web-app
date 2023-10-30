import React, { useState } from 'react';
import ToggleLinkItem from './ToggleLinkItem';
import StackWithCheckIcon from '../../../Widgets/StackWithCheckIcon';
import { useSelector, useDispatch } from "react-redux";
import {
  deleteModule,
  setModule,
} from "./modulesReducer";

function ToggleLink({ module }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

  
    const dispatch = useDispatch();

    return (
        <div style={{ width: "100%", marginBottom: "45px" }}>
            <a style={{ paddingTop: '15px', paddingBottom: '15px' }}
                className="list-group-item list-group-item-secondary"
                onClick={toggleCollapse}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 128 512"
                >
                    <path
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 128 512"
                >
                    <path
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                    />
                </svg>
                <i className="fa fa-caret-down" style={{ color: 'black' }}></i>
                <strong style={{ fontWeight: 'bold' }}>{module.name}</strong>
                
                <div className="float-end" style={{marginTop:"-5px"}}>
                    <StackWithCheckIcon />
                    <i className="fa fa-caret-down" style={{ color: 'black' }}></i>
                    <i className="fa fa-plus" style={{ color: 'black', margin: "0 20px" }}></i>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 128 512"
                    >
                        <path
                            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                        />
                    </svg>
                    <button className='btn btn-grey btn-secondary' onClick={() => dispatch(setModule(module))}>Edit</button>
                    <button className='btn btn-danger'  onClick={() => dispatch(deleteModule(module._id))}
                    >Delete</button>
                </div>


            </a>
            {isCollapsed ? null : (
                <ToggleLinkItem module={module} />
            )}
        </div>
    );
}

export default ToggleLink;
