export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};


export const checkClick = (user) => {
    console.log("You BUTTON_CLICKED on user: ", user.first);
    return {
      type: 'BUTTON_CLICKED',
      payload: user
    }
};
