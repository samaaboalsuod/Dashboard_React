import React, { useState } from 'react';
import { supabase } from '../Supabase';
import ShortInput from './ShortInput';
import RichText from './RichText'; // Assuming this is your component name
import Button from './Button';

const EditCategoryModal = ({ data, onClose, onRefresh }) => {
    // Local state for the fields
    const [title, setTitle] = useState(data.title || "");
    const [projNum, setProjNum] = useState(data.Project_Numbers || "");
    const [desc, setDesc] = useState(data.description || "");

    const handleUpdate = async () => {
        const { error } = await supabase
            .from('Categories')
            .update({
                title: title,
                description: desc,
                Project_Numbers: projNum
            })
            .eq('id', data.id);

        if (!error) {
            onRefresh();
            onClose();
        } else {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="modalOverlay">
            <div className="editCategoryPanel">
                <h2 className="modalTitle">Edit Category Panel</h2>
                
                <div className="inputRow">
                    {/* USING YOUR SHORT INPUT COMPONENTS */}
                    <ShortInput 
                        title="Category Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <ShortInput 
                        title="Projects number" 
                        value={projNum} 
                        onChange={(e) => setProjNum(e.target.value)} 
                    />
                </div>

                <div className="richTextContainer">
                    <label className="inputLabel">Description</label>
                    {/* USING YOUR RICH TEXT COMPONENT */}
                    <RichText 
                        value={desc} 
                        onChange={(value) => setDesc(value)} 
                    />
                    <span className="charCount">{desc.length}/500 character</span>
                </div>

                <div className="modalButtons">
                    <button className="discardBtn" onClick={onClose}>Discard</button>
                    <Button BtnText="Save Changes" onClick={handleUpdate} />
                </div>
            </div>
        </div>
    );
};

export default EditCategoryModal;