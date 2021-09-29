export const getData = async () => {
    try {
        const res = await fetch("https://v1.nocodeapi.com/panugr/google_sheets/GwaQLFgqhfpjKNFb?tabId=Projects 2021");

        if (res.ok) {
            const data = await res.json();
            const project = data.data;
            return project;
        } else {
            document.querySelector('li').style.display = 'none';
            document.querySelector('.project-card').style.display = 'none';
        }

    } catch (error) {
        console.error(error);
    }
};
//