async function login() {

  const email =
    document.getElementById('email').value;

  const password =
    document.getElementById('password').value;

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    alert('Hibás belépés');
    return;
  }

  alert('Sikeres belépés');

}

async function uploadImage() {

  const file =
    document.getElementById('fileInput').files[0];

  if (!file) {
    alert('Nincs kiválasztott fájl');
    return;
  }

  const fileName =
    Date.now() + '-' + file.name;

  const { data, error } =
    await supabaseClient.storage
      .from('gallery')
      .upload(fileName, file);

  if (error) {
    console.error(error);
    alert('Feltöltési hiba');
    return;
  }

  alert('Kép feltöltve');

}
