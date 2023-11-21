// import React, { useEffect, useState, useContext } from 'react';
// import UserConfigContext from '../settings/UserConfigContext';

// import Dragger from '../utils/Dragger';

// import { deleteEntry, getAllDocs, saveAllPositions } from '../utils/db';

// import CardBarPreview from '../components/CardBarPreview';
// import ButtonAdd from '../components/ButtonAdd';
// import ButtonStandard from '../components/ButtonStandard';

// import BlogsForm from './BlogsForm';

// import { BLOGS_BLUEPRINT } from '../configs/blogs';
// import { setPosEntries, sortEntries } from '../utils/sort';
// import { BiPlusCircle } from 'react-icons/bi';

// const Blogs = () => {

//     const { getBlogs, setBlogs } = useContext(UserConfigContext);

//     const [allBlogs, setAllBlogs] = useState([]);
//     const [formOpen, setFormOpen] = useState(null);
//     const [madeChanges, setMadeChanges] = useState(false);

//     // console.log("getPhotos", getPhotos());

//     useEffect(() => {
//         (async () => {
//             await refreshBlogs();
//         })()
//     }, [])

//     const refreshBlogs = async () => {
//         const getBlogsFromContext = await getBlogs()
//         console.log("getBlogsFromContext", getBlogsFromContext);

//         const allBl = sortEntries(getBlogsFromContext.length === 0 ? await getAllDocs('blogs') : getBlogsFromContext);
//         setAllBlogs(allBl);
//         setBlogs(allBl);
//         console.log("allBlogs", allBl);
//     }

//     const handleEdit = (blog) => {
//         setFormOpen(blog);
//         console.log(blog, "edit");
//     }

//     const handleDelete = async (entry) => {
//         console.log(entry, "delete");

//         if (confirm('Are you sure you want to delete this?')) {
//             await deleteEntry(entry.name, 'blogs');
//             const newBlogs = allBlogs.filter(blog => blog.name !== entry.name);
//             setAllBlogs(newBlogs);
//             setBlogs(newBlogs);
//         }
//     }

//     const handleFormOpen = () => {
//         console.log('open');
//         const date = new Date();
//         const newBlog = { ...BLOGS_BLUEPRINT, date: date.toISOString().split('T')[0] }
//         console.log(newBlog);

//         setFormOpen(newBlog)
//     }

//     const handleFormClose = async () => {
//         console.log('close');
//         setFormOpen(null);
//     }

//     const handleDragEnd = (result) => {
//         // dropped outside
//         console.log('dragEnd', result);
//         if (!result.destination) {
//             return;
//         }

//         const sourceIndex = result.source.index;
//         const destinationIndex = result.destination.index;
//         const newBlogs = [...allBlogs];

//         const [draggedElement] = newBlogs.splice(sourceIndex, 1);
//         newBlogs.splice(destinationIndex, 0, draggedElement);
//         setPosEntries(newBlogs)
//         setAllBlogs(newBlogs);

//         setMadeChanges(true);
//     };

//     const saveChanges = async () => {
//         const result = await saveAllPositions(allBlogs, 'blogs');
//         if (result) {
//             setBlogs(allBlogs);
//             setMadeChanges(false);
//         }
//     }
//     console.log("allBlogz", allBlogs);

//     const renderChild = (child) => {
//         return <CardBarPreview key={child.name}
//             preview={child}
//             onEdit={handleEdit}
//             onDelete={() => handleDelete(child)}
//             id={child.name}
//         />
//     }

//     return (
//         <>
//             <div className='flex flex-col'>
//                 {madeChanges && <ButtonStandard content='Speichern' onClick={saveChanges} className='bg-green-500 hover:bg-green-600' />}

//                 {allBlogs.length !== 0 ? <>
//                     <ButtonAdd content={<BiPlusCircle />} onClick={handleFormOpen} />

//                     <Dragger
//                         entries={allBlogs}
//                         renderChild={renderChild}
//                         handleDragEnd={handleDragEnd}
//                         direction='vertical'
//                         className='flex flex-col'
//                     />
//                 </> : <>Loading..</>}
//                 {formOpen && <BlogsForm blog={formOpen} onClose={handleFormClose} setAllBlogs={setAllBlogs} />}
//             </div>
//         </>

//     );
// };

// export default Blogs;