import React, { useEffect, useState } from 'react';
import { supabase } from '../Supabase';
import './Messages.css';

import Nav from '../Components/Nav';
import TheSideBar from '../Components/TheSideBar';
import Footer from '../Components/Footer';
import CateTopCard from '../Components/CateTopCard';
import TableCard from '../Components/TableCard ';
import ShortInput from '../Components/ShortInput';
import RichText from '../Components/RichText';
import Button from '../Components/Button';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [systemIcons, setSystemIcons] = useState([]);
    
    // MODAL STATES
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({
        id: null,
        title: "",
        description: "",
        Project_Numbers: ""
    });

    const getCategories = async () => {
        const { data } = await supabase.from('Categories').select('*');
        const { data: iconsData } = await supabase.from('SystemIcons').select('*');
        if (data) setCategories(data);
        if (iconsData) setSystemIcons(iconsData);
    };

    useEffect(() => { getCategories(); }, []);

    // OPEN MODAL FOR EDIT
    const handleEditClick = (cat) => {
        setSelectedCategory({
            id: cat.id,
            title: cat.title || "",
            description: cat.description || "",
            Project_Numbers: cat.Project_Numbers || ""
        });
        setIsModalOpen(true);
    };

    // SAVE UPDATE
    const handleUpdate = async () => {
        const { error } = await supabase
            .from('Categories')
            .update({
                title: selectedCategory.title,
                description: selectedCategory.description,
                Project_Numbers: selectedCategory.Project_Numbers
            })
            .eq('id', selectedCategory.id);

        if (!error) {
            alert("Updated Successfully!");
            setIsModalOpen(false);
            getCategories(); 
        } else {
            alert("Error: " + error.message);
        }
    };

    const getIcon = (altName) => {
        const found = systemIcons.find(icon => icon.alt === altName);
        return found ? found.icon : ""; 
    };

    return (
        <>
            <header><Nav pageTitle="Categories" /></header>
            <section className='MainArea'>
                <TheSideBar />
                <div className='contentArea'>
                    <div className='AllContent'>
                        <CateTopCard /> 

                        <div className='messCont'>
                            {categories.map((cat, index) => (
                                <TableCard
                                    key={cat.id}
                                    title={cat.title}
                                    subtitle={cat.description} 
                                    count={cat.Project_Numbers}
                                    variant={index % 2 === 0 ? "transparent" : "grey"}
                                    icons={[getIcon("editIcon"), getIcon("peviewIcon"), getIcon("deleteIcon")]}
                                    onEdit={() => handleEditClick(cat)} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- THE OVERLAY PANEL --- */}
                {isModalOpen && (
                    <div className="modalOverlay">
                        <div className="editCategoryPanel">
                            <h2 className='modalTitle'>Edit Category Panel</h2>
                            
                            <div className="inputRow">
                                <ShortInput 
                                    title="Category Title"
                                    value={selectedCategory.title} 
                                    onChange={(e) => setSelectedCategory({...selectedCategory, title: e.target.value})}
                                />
                                <ShortInput 
                                    title="Projects number"
                                    value={selectedCategory.Project_Numbers} 
                                    onChange={(e) => setSelectedCategory({...selectedCategory, Project_Numbers: e.target.value})}
                                />
                            </div>

                            <div className="richTextContainer">
                                <label className='inputLabel'>Description</label>
                                <RichText 
                                    value={selectedCategory.description} 
                                    onChange={(val) => setSelectedCategory({...selectedCategory, description: val})}
                                />
                                <span className="charCount">{selectedCategory.description.length}/500 character</span>
                            </div>

                            <div className="modalButtons">
                                <button className="discardBtn" onClick={() => setIsModalOpen(false)}>Discard</button>
                                <Button BtnText="Save Changes" onClick={handleUpdate} />
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
}

export default Categories;