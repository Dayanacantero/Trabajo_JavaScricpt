// Simulación de una base de datos de recetas
const recipes = [
    { title: 'Burritos de Pollo', description: 'Burritos rellenos de pollo, frijoles y arroz.', ingredients: ['pollo', 'frijoles', 'arroz', 'tortillas'], image: 'images/img1.jpg' },
    { title: 'Quiche de Espinacas', description: 'Quiche cremosa con espinacas y queso feta.', ingredients: ['masa de tarta', 'espinacas', 'queso feta', 'huevos'], image: 'images/img2.jpg' },
    { title: 'Falafel', description: 'Bolas de garbanzos fritas, perfectas en ensaladas o pita.', ingredients: ['garbanzos', 'ajo', 'perejil', 'comino'], image: 'images/img3.jpg' },
    { title: 'Pollo al Limón', description: 'Pollo marinado en limón y hierbas, asado a la perfección.', ingredients: ['pollo', 'limón', 'ajo', 'romero'], image: 'images/img4.jpg' },
    { title: 'Muffins de Arándano', description: 'Muffins esponjosos cargados de arándanos frescos.', ingredients: ['harina', 'arándanos', 'azúcar', 'huevos'], image: 'images/img5.jpg' },
    { title: 'Ceviche de Camarón', description: 'Camarones maridados en jugo de limón con cebolla y cilantro.', ingredients: ['camarón', 'limón', 'cebolla', 'cilantro'], image: 'images/img6.jpg' },
    { title: 'Galletas de Avena', description: 'Galletas saludables de avena y plátano.', ingredients: ['avena', 'plátano', 'miel', 'nueces'], image: 'images/img7.jpg' },
    { title: 'Risotto de Champiñones', description: 'Risotto cremoso con champiñones y queso parmesano.', ingredients: ['arroz', 'champiñones', 'queso parmesano', 'caldo'], image: 'images/img8.jpg' },
];

// Función para mostrar las recetas
function displayRecipes(filteredRecipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = ''; // Limpiar la lista de recetas
    const recipeImage = document.getElementById('recipe-image'); // Contenedor de la imagen
    recipeImage.innerHTML = ''; // Limpiar la imagen al mostrar nuevas recetas

    filteredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <h2 class="recipe-title">${recipe.title}</h2>
            <p>${recipe.description}</p>
        `;
        
        recipeDiv.querySelector('.recipe-title').addEventListener('click', () => {
            recipeImage.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">`;
        });

        recipeList.appendChild(recipeDiv);
    });
}

function filterRecipes() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );
    displayRecipes(filteredRecipes);
}

document.getElementById('search-input').addEventListener('input', filterRecipes);
displayRecipes(recipes);
