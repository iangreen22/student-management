import Sidebar from "./Components/Sidebar";
import Home from "./Sections/Home";
import { useState } from 'react';
import Manage from "./Sections/Manage";
import DeleteModal from "./Modals/DeleteModal";
import EditModal from "./Modals/EditModal";
import AddModal from "./Modals/AddModal";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Ian G', age: 24, address: "Purok Kutok", profile: "https://images.unsplash.com/photo-1775681158653-c98bf2d9d825?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },

  ]);
  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedItems, setSelectedItems] = useState(null);

  const [addModal, setAddModal] = useState(false);

  const [updateModal, setUpdateModal] = useState(false);

  const [toUpdate, setToUpdate] = useState(null);

  const requestDelete = (index) => {
    setSelectedItems(index);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedItems = [...items];
    updatedItems.splice(selectedItems, 1);
    setItems(updatedItems);
    setDeleteModal(false);
  };

  const requestUpdate = (index) => {
    setToUpdate(index);
    setUpdateModal(true);
  };

  const selectedItemName = items[selectedItems];

  const toUpdateName = items[toUpdate];

  const saveEdits = (updatedItem) => {
    const updatedItems = [...items];
    updatedItems[toUpdate] = updatedItem;
    setItems(updatedItems);
    setUpdateModal(false);
  };

  const [activeNav, setActiveNav] = useState('Home');

  const goToPage = (page) => {
    setActiveNav(page);

  };

  const requestAdd = () => {
    setAddModal(true);
  };
   

  const confirmAdd = (newStudent) =>{
    const ref=[...items, newStudent]
    setItems(ref)
    alert("Added succesfully!")
    setAddModal(false)

  };


  return (

    <>
      <Sidebar onSelectedTab={goToPage} />
      {activeNav === 'Home' &&
        <Home
          person={items}
        />
      }

      {activeNav === 'Manage' &&
        <Manage
          person={items}
          setDeleteModal={requestDelete}
          isUpdate={requestUpdate}
          openAddModal={requestAdd}
        />
      }

      <DeleteModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        itemName={selectedItemName?.name}
        onConfirm={confirmDelete}
      />

      <EditModal
        isOpen={updateModal}
        onClose={() => setUpdateModal(false)}
        itemName={toUpdateName}
        onSave={saveEdits}
      />

      <AddModal
        isOpen={addModal}
        onClose={() => setAddModal(false)}
        onSave={confirmAdd}
       
      />

    </>
  )
}
export default App;