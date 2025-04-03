// res.data.user.id
// supabase.auth.detUser();
const res = {
    data: {
        user: {
            id: 102030
        }
    }
}

function doA(res) {
    console.log(res.data.user.id);
}

doA(res);