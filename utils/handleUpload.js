import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../firebase";

export const handleUpload = async (url, setDownloadUrl, setText) => {
    const response = await fetch(url);
    const blob = await response.blob();
    let name = new Date().getTime() + "-media.jpg";
    const storageRef = ref(storage, "images/" + name);

    let file = await new File([blob], name, {
        type: "image/jpg",
    });
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setText("Uploading " + progress + " %");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setDownloadUrl(downloadURL);
                    setText("Upload Complete!");
                    //set the uploaded thing here!!!
                });
            }
        );
    });
};
