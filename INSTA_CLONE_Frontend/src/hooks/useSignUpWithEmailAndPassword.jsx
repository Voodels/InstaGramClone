import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore'; // Add this line

const useSignUpWithEmailAndPassword = (auth, firestore) => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
            console.log("all fields are required");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) {
                console.log(error);
                return;
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullname: inputs.fullname,
                    bio: "",
                    photoURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);

                // storing data in local storage too
                localStorage.setItem("user-info", JSON.stringify(userDoc));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {
        loading,
        error,
        signup,
    };
};

export default useSignUpWithEmailAndPassword;
