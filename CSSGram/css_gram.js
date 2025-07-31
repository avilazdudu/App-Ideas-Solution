// Mapeamento dos filtros para CSS
const filterMap = {
    light_filter: "brightness(1.3) contrast(0.9) saturate(1.1)",
    glitch_filter: "contrast(2) brightness(1.2) hue-rotate(90deg) saturate(2)",
    cold_filter: "brightness(0.95) sepia(0.2) hue-rotate(180deg) saturate(1.2) contrast(1.05)",
    dark_filter: "brightness(0.7) contrast(1.2) grayscale(0.2)",
    hot_filter: "brightness(1.1) sepia(0.3) hue-rotate(-20deg) saturate(1.5) contrast(1.1)"
};

function getCombinedFilter() {
    let filters = [];
    if (light_filter.checked) filters.push(filterMap.light_filter);
    if (glitch_filter.checked) filters.push(filterMap.glitch_filter);
    if (cold_filter.checked) filters.push(filterMap.cold_filter);
    if (dark_filter.checked) filters.push(filterMap.dark_filter);
    if (hot_filter.checked) filters.push(filterMap.hot_filter);
    return filters.join(' ');
}

document.getElementById('download_btn').addEventListener('click', function() {
    if (!uploaded_image) return;
    const img = new window.Image();
    img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.filter = getCombinedFilter();
        ctx.drawImage(img, 0, 0, img.width, img.height);
        const link = document.createElement('a');
        link.download = 'filtered-image.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };
    img.src = uploaded_image;
});

const input_select_photo = document.getElementById("input_select_photo");
const light_filter = document.getElementById("light_filter");
const glitch_filter = document.getElementById("glitch_filter");
const cold_filter = document.getElementById("cold_filter");
const dark_filter = document.getElementById("dark_filter");
const hot_filter = document.getElementById("hot_filter");
const display = document.getElementById("display");
const filter_display = document.getElementById("filter_display")

let uploaded_image = "";

input_select_photo.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load",() => {
        uploaded_image = reader.result;
        document.getElementById("display").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});




function applyFilters() {
    // Combina todos os filtros marcados em uma única string
    display.style.filter = getCombinedFilter();
}

[light_filter, glitch_filter, cold_filter, dark_filter, hot_filter].forEach(f => {
    f.addEventListener('change', applyFilters);
});