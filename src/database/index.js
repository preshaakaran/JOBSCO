import mongoose from "mongoose";

const connectToDB = async () => {
    const connectionURL = "your_url"

    mongoose.connect(connectionURL).then(() => console.log("Connected to DB")).catch((err) => console.log(err));

    
};

export default connectToDB;