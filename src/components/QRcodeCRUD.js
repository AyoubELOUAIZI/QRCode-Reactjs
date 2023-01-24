import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import './QRcodeCRUD.css'

const LOCAL_STORAGE_KEY = 'qr_codes';

function QRcodeCRUD() {
    const [qrCodes, setQrCodes] = useState([]);
    const [newQRCodeData, setNewQRCodeData] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    //------------------------------------------------------------------------------------------//
    //  the first useEffect hook, the second argument is an empty array[], this
    //   tells React that this effect should only run on the initial render of 
    //   the component and not re - run when any of the component's props or state change.
    useEffect(() => {
        // Retrieve the QR codes from local storage
        const storedQRCodes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');

        // Update the component's state with the retrieved QR codes
        setQrCodes(storedQRCodes);
    }, []);


    // And in the second useEffect hook, the second argument is[qrCodes], this 
    // tells React that this effect should re - run whenever the qrCodes state changes.
    useEffect(() => {
        // Store the QR codes in local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(qrCodes));
    }, [qrCodes]);
    //------------------------------------------------------------------------------------------//

    function handleAddQRCode() {
        if (!newQRCodeData || !newDescription) {
            alert("Please enter a description with a QRCode data and try again.");
            return;
        }
        if (editingIndex === null) {
            setQrCodes([...qrCodes, { data: newQRCodeData, description: newDescription }]);
        } else {
            const newQrCodes = [...qrCodes];
            newQrCodes[editingIndex] = { data: newQRCodeData, description: newDescription };
            setQrCodes(newQrCodes);
            setEditingIndex(null);
        }
        // setNewQRCodeData('');
        // setNewDescription('');
    }
    //------------------------------------------------------------------------------------------//

    function handleEditQRCode(index) {
        setEditingIndex(index);
        setNewQRCodeData(qrCodes[index].data);
        setNewDescription(qrCodes[index].description);
    }
    //------------------------------------------------------------------------------------------//

    function handleDeleteQRCode(index) {
        const newQrCodes = [...qrCodes];
        newQrCodes.splice(index, 1);
        setQrCodes(newQrCodes);
    }
    //------------------------------------------------------------------------------------------//

    return (
        <div className='mylist'>
            <div className='inputs'>
                <input
                    type="text"
                    placeholder="QR code data"
                    value={newQRCodeData}
                    onChange={e => setNewQRCodeData(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}
                />
                <button onClick={handleAddQRCode}>
                    {editingIndex === null ? "Add QR Code" : "Update QR Code"}
                </button>
            </div>
          
            <div className="qrCodes" >
                {qrCodes.map((qrCode, index) => (
                    <div className="qrCode" key={index}>
                        <QRCode value={qrCode.data} />
                        <p>{qrCode.description}</p>
                        <button onClick={() => handleEditQRCode(index)}>Edit</button>
                        <button className='del' onClick={() => handleDeleteQRCode(index)}>Delete</button>
                    </div>
                ))}
            </div>
          
        </div>
    );
}

export default QRcodeCRUD;


//----------------------------------------------------------------------------------------------//

//This component uses the `useState` hook to keep track of the QR codes, the new QR code data,
//the new description,and the index of the QR code that is being edited.

//It uses the `useEffect` hook to retrieve the QR codes from local storage when the component mounts and to
//store the QR codes in local storage when the QR codes state changes.

//The component has two input fields, one for the QR code data and another for the description,
//and two buttons, one for adding / updating the QR code, and another for deleting the QR code.

//The `handleAddQRCode` function is called when the user clicks the "Add QR Code" button and it adds
//a new QR code to the list of QR codes using the current values of the input fields.If the user is editing
//an existing QR code, this function updates the QR code in the list with the new values.

//The`handleEditQRCode` function is called when the user clicks the "Edit" button of a QR code and
//it sets the index of the QR code that is being edited.

//The `handleDeleteQRCode` function is called when the user clicks the "Delete" button of
//a QR code and it removes the QR code from the list of QR codes.

//It then renders the list of QR codes, along with their descriptions and the corresponding
//buttons to edit and delete each QR code.

//Keep in mind, that since this app is using the local storage, the data will be saved in the browser,
//so it will only be available for the current user and on the current computer.
//If the user clears the browser's cache, the data will be lost.

