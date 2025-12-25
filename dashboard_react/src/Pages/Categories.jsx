import React, { useEffect, useState } from 'react';
import { supabase } from '../Supabase';
import { createPortal } from 'react-dom';
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [selectedCategory, setSelectedCategory] = useState({
        id: null,
        title: "",
        description: "",
        Project_Numbers: ""
    });

    // 1. GET (Read) - Working
    const getCategories = async () => {
        const { data } = await supabase.from('Categories').select('*');
        const { data: iconsData } = await supabase.from('SystemIcons').select('*');
        if (data) setCategories(data);
        if (iconsData) setSystemIcons(iconsData);
    };

    useEffect(() => { getCategories(); }, []);

    // 2. CREATE (Setup)
    const handleAddNewClick = () => {
        setSelectedCategory({ id: null, title: "", description: "", Project_Numbers: "" });
        setIsModalOpen(true);
    };

    // 3. EDIT (Setup)
    const handleEditClick = (cat) => {
        setSelectedCategory({
            id: cat.id,
            title: cat.title || "",
            description: cat.description || "",
            Project_Numbers: cat.Project_Numbers || ""
        });
        setIsModalOpen(true);
    };

    // 4. SAVE (Handles both CREATE and EDIT)
    const handleSave = async () => {
        const payload = {
            title: selectedCategory.title,
            description: selectedCategory.description,
            Project_Numbers: selectedCategory.Project_Numbers
        };

        if (selectedCategory.id) {
            // UPDATE
            await supabase.from('Categories').update(payload).eq('id', selectedCategory.id);
        } else {
            // INSERT (Make sure your INSERT policy is active in Supabase!)
            await supabase.from('Categories').insert([payload]);
        }

        setIsModalOpen(false);
        getCategories();
    };

    // 5. DELETE - Working
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            const { error } = await supabase.from('Categories').delete().eq('id', id);
            if (!error) getCategories();
            else alert(error.message);
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
                        <CateTopCard onAddClick={handleAddNewClick} /> 

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
                                    onDelete={() => handleDelete(cat.id)} // Pass delete function
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- PORTAL MODAL --- */}
                {isModalOpen && createPortal(
                    <div className="modalOverlay">
                        <div className="editCategoryPanel">
                            <h2 className='modalTitle'>
                                {selectedCategory.id ? "Edit Category Panel" : "Add Category Panel"}
                            </h2>
                            
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
                                <Button 
                                    BtnText={selectedCategory.id ? "Save Changes" : "Add Category"} 
                                    onClick={handleSave} 
                                />
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
            </section>
            <Footer />
        </>
    );
}

export default Categories;