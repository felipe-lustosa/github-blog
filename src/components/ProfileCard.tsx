import { useEffect, useState } from "react"
import { api } from "../services/api"

export function ProfileCard() {
  const [user, setUser]: any = useState({});

  function fetchUser() {
    api.get('users/felipe-lustosa').then((response) => {
      setUser(response.data)
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="bg-base-profile flex p-8 -mt-16 rounded-lg gap-8">
      <img width={148} height={148} src={user.avatar_url} />

      <div className="flex flex-col w-full">
        <div className="flex justify-between pb-2">
          <h2 className="text-base-title text-title-lg">{user.name}</h2>
          <a className="text-brand-blue text-link flex gap-2 items-center cursor-pointer" href={user.html_url}>GITHUB <img src="/assets/link.svg" /></a>
        </div>
        <p className="text-base text-base-text">
          {user.bio}
        </p>

        <div className="flex gap-6 items-center mt-6">
          <div className="flex gap-2">
            <img src="/assets/github.svg" />
            <span className="text-base-subtitle">{user.login}</span>
          </div>
          <div className="flex gap-2">
            <img src="/assets/company.svg" />
            <span className="text-base-subtitle">{user.company}</span>
          </div>
          <div className="flex gap-2">
            <img src="/assets/followers.svg" />
            <span className="text-base-subtitle">{`${user.followers} seguidores`}</span>
          </div>
        </div>

      </div>
    </div>
  )
}