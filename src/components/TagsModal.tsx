'use client'
import React, { useEffect, useState } from 'react'
import { projectTags } from '@/lib/data'

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox'

type TagsModalProps = {
    handleTags: (selectedTags: string[]) => void;
  };

const TagsModal = ({handleTags} : TagsModalProps ) => {
    const [tags, setTags] = useState(''); // Current input
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredTags = projectTags.filter((tag) => tag.toLowerCase().includes(tags.toLowerCase()) && !selectedTags.includes(tag))

    const handleTagSelection = (tag: string) => {
        setSelectedTags((prevTags) => [...prevTags, tag]);
        console.log('selected tags are')
        setTags('');
    }

    useEffect(() => {
      console.log('Tags are', selectedTags)
      handleTags(selectedTags)
    }, [selectedTags])
    
    const removeTag = (tag: string) => {
        setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
        handleTags(selectedTags)
    }

  return (
    <div className="space-y-2 relative">
        <Label htmlFor="tags">Tags</Label>
        <div className="flex items-center flex-wrap border rounded p-2 w-full">
        {selectedTags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm mr-2 my-1 flex items-center"
          >
            {tag}
            <button
              type="button"
              className="ml-1 text-blue-500 hover:text-blue-700"
              onClick={() => removeTag(tag)}
            >
              &times;
            </button>
          </span>
        ))}

        {/* Text input for entering tags */}
        <input
          id="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="flex-grow p-1 text-sm outline-none"
          placeholder={selectedTags.length > 0 ? '' : 'Start typing...'}
        />
      </div>
        
            {tags && (
                filteredTags.length > 0 ? (
                    <div className='shadow-xl p-3 rounded-xl w-[10rem] absolute z-10 bg-white'>
                        {filteredTags.map((tag) => (
                            <div key={tag} className="flex items-center space-x-2 my-2 hover:bg-slate-300 rounded-md p-2 cursor-pointer" onClick={() => handleTagSelection(tag)}>
                                <span className="font-medium text-xs">{tag}</span>
                            </div>
                        
                        ))
                        }
                    </div>
                ) : 
                (
                    <p className='text-xs'>No matching tags found.</p>
                )
            )}
        </div>

  )
}

export default TagsModal