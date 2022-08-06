const getId = async (req) => {
    const { id } = req.params;
    return id
}

module.exports = {
    getId,
}
