const UserValidation = (values) => {
    const errors = {};

    if (!values.nama || values.nama ==="") {
        errors.nama = 'Nama Harus Di Isi'
    } 
    if (!values.umur || values.umur ==="") {
        errors.umur = 'Umur Harus Di Isi'
    } 
    if (!values.alamat || values.alamat ==="") {
        errors.alamat = 'Alamat Harus Di Isi'
    } 
    if (!values.hp || values.hp ==="") {
        errors.hp = 'No. HP Harus Di Isi'
    } 
    return errors;
}

export default UserValidation;
