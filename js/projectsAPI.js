export const getData = async () => {
    try {
        const res = await fetch("https://v1.nocodeapi.com/panugr/google_sheets/GwaQLFgqhfpjKNFb?tabId=Projects 2021");
        const data = await res.json();
        const project = data.data;
        return project;
    } catch (error) {
        console.error(error);
    }
};