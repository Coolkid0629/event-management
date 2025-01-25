import argon2 from "argon2";

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (error) {
    throw new Error("Error in hashing password");
  }
};

const verifyPassword = async (hash, password) => {
  try {
    console.log(hash, password);
    const match = await argon2.verify(hash, password);
    console.log(hash, password);
    return match;
  } catch (error) {
    throw new Error("Error in verifying password");
  }
};

export { hashPassword, verifyPassword };
