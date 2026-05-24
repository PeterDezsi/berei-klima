async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    console.error(error);
    alert('Hibás belépés');
    return;
  }

  console.log("USER:", data);
  alert('Sikeres belépés');
}

async function uploadImage() {

  const file = document.getElementById('fileInput').files[0];

  if (!file) {
    alert('Nincs kiválasztott fájl');
    return;
  }

  const fileName = `${Date.now()}-${file.name}`;

  const { data: user } = await supabaseClient.auth.getUser();

  console.log("USER CHECK:", user);

  const { data, error } = await supabaseClient.storage
    .from('gallery')
    .upload(fileName, file);

  if (error) {
    console.error("UPLOAD ERROR:", error);
    alert(error.message);
    return;
  }

  alert('Kép feltöltve!');
  console.log("UPLOAD OK:", data);
}
