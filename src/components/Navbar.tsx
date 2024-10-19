"use client";
import { auth, db } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user,setUser] = useState<any>(null)
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
        if(user?.uid) {
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()) {
                setUser(docSnap.data())
            }
        }
    })
    return () => {
        unSub()
    }
  },[])
  const handleLogout = () => {
    signOut(auth).then(() => {
        setUser(null)
    }).catch((error) => {
        console.log(error)
    })
  }
  return (
    <div className="h-12 flex items-center justify-between relative">
      {/* LEFT */}
      <div className="flex items-center gap-5">
        <Image src="/logo.png" alt="" width={48} height={48} />
        <div className="flex items-center gap-[3px] text-white font-normal text-xl">
          <span className="px-[17px] py-2 text-[#ed3a26] border-b border-b-[#ffffff86] cursor-pointer">
            Home
          </span>
          <span className="px-[17px] py-2 cursor-pointer">Tournaments</span>
          <span className="px-[17px] py-2 cursor-pointer">Compare Devices</span>
          <span className="px-[17px] py-2 cursor-pointer">Shop</span>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex items-center gap-5">
        <div className="w-[116px] rounded-[7px] bg-[#c1c1c1] flex items-center pr-2">
          <input
            type="text"
            className="w-full px-3 outline-none font-normal bg-transparent"
            placeholder="Search"
          />
          <Image
            src={"/search.png"}
            alt=""
            className=""
            width={22}
            height={18}
          />
        </div>
        <div className="cursor-pointer">
          <Image src={"/bell.png"} alt="" className="" width={21} height={21} />
        </div>
        <div className="relative cursor-pointer">
          <Image src={"/msg.png"} alt="" className="" width={19} height={21} />
          <div className="absolute bg-[#ac1717] w-[9px] h-[9px] rounded-full -right-[3px] -top-[1px]"></div>
        </div>
        {user ? (
          <div
            className="cursor-pointer w-[37px] h-[37px] rounded-full"
            onClick={() => setOpen(!open)}
          >
            <Image
              src={"/userImg.png"}
              alt=""
              className=""
              width={37}
              height={37}
            />
          </div>
        ) : (
          <Link href={"/login"} className="cursor-pointer text-white text-lg">
            Sign In
          </Link>
        )}
      </div>
      {user && open && (
        <div className="absolute flex flex-col p-5 gap-7 w-[207px] min-h-[282px] rounded-b-[20px] border-2 border-[#302a64] bg-[#dcecfff1] right-0 top-full z-50">
          <div className="flex items-center justify-end gap-5">
            <div className="flex flex-col">
              <span className="font-normal text-[15px] text-[#2d275d]">
                {user.username}
              </span>
              <span className="font-normal text-[10px] text-[#2d275d]">
                {user.email}
              </span>
            </div>
            <div className="cursor-pointer w-[26x] h-[26x] rounded-full">
              <Image
                src={"/userImg.png"}
                alt=""
                className=""
                width={26}
                height={26}
              />
            </div>
          </div>
          <hr className="border border-[#302a64]" />
          <div className="flex flex-col justify-end">
            <span className="font-normal text-[15px] text-[#2d275d] text-right cursor-pointer">
              Profile
            </span>
            <span className="font-normal text-[15px] text-[#2d275d] text-right cursor-pointer">
              Leaderboard
            </span>
            <span className="font-normal text-[15px] text-[#2d275d] text-right cursor-pointer">
              Wallet
            </span>
            <span className="font-normal text-[15px] text-[#2d275d] text-right cursor-pointer">
              Setting
            </span>
            <span onClick={handleLogout} className="font-normal text-[15px] text-[#2d275d] text-right cursor-pointer">
              Logout
            </span>
          </div>
          <hr className="border-[7px] self-end w-[50%] border-[#302a64]" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
