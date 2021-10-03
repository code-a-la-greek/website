const url='https://v1.nocodeapi.com/panugr/google_sheets/weAjdfuhKgnxoMqy?tabId=Projects 2021&perPage=3&page=1';

export const getData = async () => {
    try {
        const res = await fetch(url);

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
