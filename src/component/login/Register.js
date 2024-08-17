import { FiLock, FiMail, FiUser, FiPhone } from "react-icons/fi";
import { FaRegAddressBook, FaRegBuilding } from "react-icons/fa";

//internal import
import Error from "@component/form/Error";
import InputArea from "@component/form/InputArea";
import SelectArea from "@component/form/SelectInput";
import useLoginSubmit from "@hooks/useLoginSubmit";

const Register = ({ setShowResetPassword, setModalOpen }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setModalOpen);

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold font-serif">Shipping Address</h2>
        {/* <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Create an account with email
        </p> */}
      </div>
      <form
        // onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              register={register}
              label="Name"
              name="name"
              type="text"
              placeholder="Full Name"
              Icon={FiUser}
            />

            <Error errorName={errors.name} />
          </div>

          <div className="form-group">
            <InputArea
              register={register}
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={errors.email} />
          </div>

          <div className="form-group">
            <InputArea
              register={register}
              label="Phone"
              name="phone"
              type="text"
              placeholder="Phone"
              Icon={FiPhone}
            />

            <Error errorName={errors.password} />
          </div>

          <div className="form-group">
            <SelectArea
              register={register}
              label="State"
              name="state"
              type="text"
              placeholder="address"
              Icon={FaRegBuilding}
              options={["Lagos"]}
            />

            <Error errorName={errors.password} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              label="Address"
              name="address"
              type="text"
              placeholder="Address"
              Icon={FaRegAddressBook}
            />

            <Error errorName={errors.password} />
          </div>
          {loading ? (
            <button
              disabled={loading}
              type="submit"
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-[#1E1E1E] text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
            >
              <img
                src="/loader/spinner.gif"
                alt="Loading"
                width={20}
                height={10}
              />
              <span className="font-serif ml-2 font-light">Processing</span>
            </button>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="w-full text-center py-3 rounded bg-[#1E1E1E] text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
            >
              Register
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Register;
