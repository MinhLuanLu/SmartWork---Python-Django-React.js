import React from "react";
import '../style_css/main_page.css';
import Header from "../components/header.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Main_page(){
    const [FullName, setFullName] = useState('');
    const [Role, setRole] = useState('');
    useState(()=>{
        const getFullName = sessionStorage.getItem('FullName');
        const getRole = sessionStorage.getItem('Role');
        setRole(getRole);
        setFullName(getFullName);
    })
    const navigate = useNavigate();

    useEffect(() =>{
        if(FullName == null){
            navigate('/Home');
        }
    },[])
    return(
        <>  
          
            <Header></Header>
            
            {Role != "Manager" && <div className="btn_div">
                <Link to="/CheckIn" className="btn">
                    Check-In
                </Link>
            </div>}
            {Role != "Employee" && <section class="pt-10 pb-8 overflow-hidden bg-gray-100 sm:pt-16 lg:pt-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">SmartWork</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Nonnect colleagues with each other</p>
                        <a
                            href="#"
                            title=""
                            class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
                            role="button"
                        >
                            Check all apps
                        </a>
                    </div>
                </div>

                <img class="w-full min-w-full mx-auto mt-12 scale-150 max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png" alt="" />
            </section>}

        </>
    );
}