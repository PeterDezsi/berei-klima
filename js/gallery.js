async function loadGallery() {

  const { data, error } = await supabaseClient
    .storage
    .from('gallery')
    .list('', {
      limit: 100
    });

  if (error) {
    console.error(error);
    return;
  }

  const gallery = document.querySelector('.gallery');

  gallery.innerHTML = '';

  data.forEach(file => {

    const imageUrl =
      `${SUPABASE_URL}/storage/v1/object/public/gallery/${file.name}`;

    const img = document.createElement('img');

    img.src = imageUrl;

    img.alt = 'Referencia munka';

    gallery.appendChild(img);

  });

}

loadGallery();
