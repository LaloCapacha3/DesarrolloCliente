// Función para cargar datos del archivo JSON
async function loadData() {
    try {
        const response = await fetch('data/data.json');
        
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }

        const data = await response.json();

        // Configura el action del formulario de contacto
        const form = document.getElementById('form-contact') as HTMLFormElement;
        form.setAttribute('action', data.formAction);

        // Header
        document.getElementById('header-title')!.textContent = data.header.title;
        document.getElementById('header-author')!.textContent = `Hecho por: ${data.header.author}`;

        // Perfil
        document.getElementById('perfil-description')!.textContent = data.perfil.description;
        document.getElementById('perfil-image')!.setAttribute('src', data.perfil.image);

        // Educación
        const educacionList = document.getElementById('educacion-list')!;
        data.educacion.forEach((item: any) => {
            const article = document.createElement('article');
            article.innerHTML = `<h3>${item.title}</h3><p>${item.institution} | ${item.date}</p>`;
            educacionList.appendChild(article);
        });

        // Experiencia
        const experienciaList = document.getElementById('experiencia-list')!;
        data.experiencia.forEach((item: any) => {
            const article = document.createElement('article');
            article.innerHTML = `<h3>${item.title}</h3><p>${item.company} | ${item.period}</p><ul>${item.tasks.map((task: string) => `<li>${task}</li>`).join('')}</ul>`;
            experienciaList.appendChild(article);
        });

        // Proyectos
        const proyectosList = document.getElementById('proyectos-list')!;
        data.proyectos.forEach((item: any) => {
            const article = document.createElement('article');
            article.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            proyectosList.appendChild(article);
        });

        // Tecnologías
        const tecnologiasList = document.getElementById('tecnologias-list')!;
        data.tecnologias.forEach((item: any) => {
            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = `images/icons/${item.icon}`;
            img.alt = `${item.name} icon`;
            img.style.width = '40px';
            img.style.height = '40px';
            img.style.marginRight = '10px';

            li.appendChild(img);
            li.appendChild(document.createTextNode(item.name));
            tecnologiasList.appendChild(li);
        });

        // Habilidades
        const habilidadesList = document.getElementById('habilidades-list')!;
        data.habilidades.forEach((item: string) => {
            const li = document.createElement('li');
            li.textContent = item;
            habilidadesList.appendChild(li);
        });

        // Pasatiempos
        document.getElementById('pasatiempos-description')!.textContent = data.pasatiempos.description;

        // Contacto
        const Contactolist = document.getElementById('contact-list')!;
        data.contacto.forEach((item: any) => {
            const a = document.createElement('a');
            const img = document.createElement('img');

            img.src = `images/icons/social/${item.icon}`;
            a.setAttribute('href', item.contact);
            img.style.width = '20px';
            img.style.height = '20px';
            img.style.marginRight = '10px';

            a.appendChild(img);
            Contactolist.appendChild(a);
        });

    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

loadData();