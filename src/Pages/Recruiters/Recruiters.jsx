import React from "react";
import { Helmet } from "react-helmet-async";

const Recruiters = () => {
  return (
    <div className="overflow-x-auto">
        <Helmet>
            <title>Recruiter</title>
        </Helmet>
        <h1 className='mt-20 text-[#0c0b0b] text-4xl font-bold text-center mb-15'>[ Recruiters who recently hired from our platform ]</h1>
        <table className="table m-10 border-2 border-black rounded-2xl">
        {/* head */}
        <thead>
          <tr>
            <th>
            </th>
            <th className="text-[#0c0b0b] text-xl font-medium">Name</th>
            <th className="text-[#0c0b0b] text-xl font-medium">Company</th>
            <th className="text-[#0c0b0b] text-xl font-medium">Position</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xl">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td className="text-xl font-bold">
              Google
              <br />
            </td>
            <td className="text-xl font-bold">Hiring Manager</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
             
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xl">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td className="text-xl font-bold">
             SJ Innovations
              <br />
            </td>
            <td className="text-xl font-bold">Tech Recruiter</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xl">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td className="text-xl font-bold">
             AuthLab
              <br />
            </td>
            <td className="text-xl font-bold">General Manager</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>
              
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xl">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td className="text-xl font-bold">
              GameDev
              <br />
            </td>
            <td className="text-xl font-bold">Manager</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Recruiters;
