import React, { Component, useEffect, useState } from 'react';
import { supabase } from '../Supabase';


const TestAPI = () => {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState("")

    useEffect(() => {

        async function getAllProjectsAPI (){
            const res = await supabase.from('Projects').select('*')
            setProjects(res.data);
            setLoading(false);
            // console.log(res);
        }
        getAllProjectsAPI();
    },[]);
if (loading) return <p>Loading...</p>;


    return ( <>
    
    {/* {console.log(projects)} */}


     {
        projects.map((project)=>{
            // console.log(project);
            return   <p>{project.Role}</p>
        })
     }

    
    </> );
}
 
export default TestAPI;