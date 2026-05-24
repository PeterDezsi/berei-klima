async function loadGallery() {

  const { data, error } = await supabaseClient
    .storage
    .from('gallery')
    .list('', { limit: 100 });

  if (error) {
    console.error(error);
    return;
  }

  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  data.forEach(file => {

    const { data: urlData } = supabaseClient
      .storage
      .from('gallery')
      .getPublicUrl(file.name);

    const img = document.createElement('img');
    img.src = urlData.publicUrl;
    img.alt = 'Referencia munka';

    gallery.appendChild(img);
  });
}

loadGallery();
