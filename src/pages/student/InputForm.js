import React from "react";

const InputForm = (props) => {
    const { register, errors, handleSubmit} = props;
    return(
        <div>
            <h3>Create Student</h3>
            <form onSubmit={handleSubmit(props.handleCreateOrUpdate)}>
                <input type={"hidden"} {...register("id")} />
                <input {...register("name", { required: true })} />
                {errors.name && <span>Name is required</span>}
                <input {...register("tel")} />
                <input {...register("address")} />
                <button type="submit">
                    Add Student
                </button>
            </form>
        </div>
    );
};
export default InputForm;
