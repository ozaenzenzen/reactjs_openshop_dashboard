import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'
import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-white h-16 p-4 flex justify-between items-center border-b border-gray-200">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 px-4"
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 ">This is the panel</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Notifications</strong>
                                        <div className="mt-2 py-1 ">This is notification panel</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus: ring-neutral-400">
                            <span className="sr-only">Open User Menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{
                                    backgroundImage:
                                        'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQDxAQFRAQDxAVEBAWDQ8XFRYXFREXFhYSFRUYHSggGBolGxcWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0lHSUtLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIFAwQGBwj/xAA8EAACAQIDBAcGBAUEAwAAAAAAAQIDEQQFIRIxQVEGEyJhcYGRBzJCUqGxFCPR4WKCksHwFSRysjOiwv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgICAgMAAwAAAAAAAAABAhEDMRIhMkEiUWEEE0L/2gAMAwEAAhEDEQA/APX7CJAQsiIlYLARAYAIQwAQrDABWESACIJEjUzTMaWFpTrVpbMILXm+SXNsJbE5RiryaSXFs5zNenGCobSU3Umvhgr6+O48s6UdNq2Nq7KbhRT7NNN3fJytvZQY6vsq15X4rX7X0M7nfppMJ9vSZ+1OTdo4eKjZ6usm+5NJaHBZ1n+Lxc5Tq16lru0YTcIruSXD6lTgKMqino3ZaeN9NxodZJSte1nus/uV91bUi1wed43CS26OJxEbW7Mpzkn5Sumen9C/anCs40Mfs06ktI1lpTl3S+R9+7wPMYU9uF1TvJb+09V4foVlVxTs4tc4ta+K5jdnRZK+rotNaBY8Y9m3TqWHccLipuWGdlRqt60nwhJvfDv4eG72iMrq5rjltlljoAAyVSGA7ACQ0AwEMBhBDAYCAdh2AjYZIQEAGASiAxAJoRIAIiJWEAgGIBAMAIykkm3oktWeD+0rpW8ZXdOnJ/h6Lagvme5zt9u7xPRfal0h/C4XqoO1XEXiuahbty9NPM8Ar1Nrwfq9TLO7um2E1Ns2AhKU7RNrH05NqK3X4Wd/3MeV022kr6vcuPd4Ho2S9GXNKVSNlytvM8stNsOO33VH0Wyu0JO3acJa8VoUGIwE1Vbcd732f3PacDksYqySUVuVu7e+8WNyClKNnHwfHxK+VX8Mf28axEtiFk2pK+v77milxGIlOynvW49J6R9EpauGv2Z5zjcJKnJxkmrPVPh+xbHPamXHr2jSqOLvvXFdx7l7Juk/X0vwlWV6lKN6Um9ZU1ps97jdLwt3ng0W1p9S+6J5vLC4mlWi2urqKTXNbpLzV0W3q7Z63NPp1jIYetGpCM4u8ZxUovmmrpmQ3c4SABgAAMAAEMIA7AgAYAAAAwAgIbQBJCGACEMAEKxIQEQJCaAQMaMWImoxbe5K7A+fvaVmrxOOryb/AC6L6qH8vvPzlc46lFyld+S+hvdIMR1leoo+71k3fntSb+zLvoHlCr4hOS/LopSa5tvsr/ORzW6m3Zjju6dd0H6LxpwjWrxvUlrGL+FeHM72hBI1cNHRG7TRlG2TaijHUiZIimtLmjJWYuindNHC9LOjqrJyS/MS0a+JL+51uc57h6F1VqJP5VqygXSrB1Xs7ezfdtKy9eBlZd7jade3j+Lw7pzcZaa6Cg7NNc/8R2nTfLU4urCz4vz4+hxNKV+y/J8vE2xu4588fGvof2T5p+Iy+MW7uhN0/wCWycfo7eR2h4t7EczcMTWw0nZVqblFX+KDvp4xbfke0m+F9OfOewCAZZQACGADQkMIAwAAGCAAAAAiJjBhJCGIAEMAEIYAIAABHKe0rM/w+ArNN7U1sq3fv+h1jOK9rGHcsuqyXCVPTu21ovoVy6Wx7j59Wt298n92d30Qq1aeGm8NS26tSo7Sa7EYw7Kvzd09DiF7y7jt+juO/D4GM3pG9VrTlUkc2Tt44t10gzGhrWoXjzVN2+hfZL00pVmoNOE+TX2OGl0sr9X1ypvqXNQ23e0W+LaTbSXKPhcsOj9api4wqui47bexJqO9a2vx9ERZZN6Xlxt1t6b+JbWhy/SrOK6XVUPfkve5F5lrcqd5aNKz8UUjwM61WpK67Keynx1sU3U4ybc9gclpQ/Nxk1Obd5XlaN78eZcSxeH2dmEaWyuCjGxTZ1lGMVOVSjNdcpq9NW2nDe/zJJ2ei0jp4nNxwGZRUJyqKVRy7UbLaXi1o95bx3N7POTLXiv8dCElKEV2GtI8FzS5HnmPwjpTa8WvXcz1XK8tapOVX333WOH6VUUmrLXaa9ScL7V5ZubZfZ9jOrx+Ekt6rxj5S7DXpJn0nE+Wejc9nF0NbWr0768NtWf9z6lp7tTow+3HyGMANGRggGgAAAINACABgAAMAACAMAYSQAACAAAQAAAIYgApul+AeIwWIpRV5SpvZ8U00/oXJj61OThftJJtdzIqY+XMdgJ0q0qck1KL19T0rongoVMBShJJpqfDnNl57Rui8a86FeCSl1kYVN3uN6yXetTL+EhhnCFNJQcOzFKyVrL67/U5OSad/D+U3FfSyK0erSi6XyNaeNuZcYLBKlDgtNIxSSXkjZw7urmfFr8t25FYvlWvg9IS8zVwEkpvxNvBxTpb1u5lP1mzW0aa2kmuVyt+iTe13Xy6Etbb+9o0/wDTIQbdtebdy2hVTWvAr8xxCSdi+WtIx8t6U+aVlGL8DzjOY7dWK0u1fXcryWv3OuzvFaNc2c/meAlGVRyspOChGLnFTTtwje738CuH7X5NTUUuQZbKpjqCjBzTanOKeuxB3l4PT1Ppik00mt1lY819mfR53q4urFRnUSjCPGNNq705y5vkelQVlbkdfHPW3n8t96TAQzRkY0IAGAADRgABBgIYAAABETYNgEgQxAAAIAAAATAGAAc9mDlCrVqx3wnBx13rZjePnuOhKLHxblUS+e7+iM+Xptw/JX9IMWlDral9ZpRjfhtaLzX1ZgzulOc6bhHSEJSm/lWiX1MGaYV1cVhaUpXpxntuNvljffyvYvXOC/EyqO1OFFbUtdF2m346HPryvt1XLwk0psHiDflLahKPNNJ8u8oqc1e8d0kmn46mTFZzToRvUdjPq6a2eXTT/wBHxsVJQrqSlJu77LSfBJIWXdFZU5xnVxNaWqlKCktlu9+Wi8DEukk5O8adVxe61Op/ZGP/AFfFvtKhUtwvsr7snxbf6s/46rFVeK3lLjsQ2maeAxWKrSk5xhTilxacm/J2RPMZWjbiUyUxx8bpUq0qtNz93rIXvy2lodpj8GtuMtiDjLZe04xutlOS3+XocZDDuc4U4+9UmkvN7z0OthX1coN9qnulztqn5qxphvW1ObKbkZsqWziHFLR0PW01b0uy8KPDrZr0ZcJRlF+cbr6pFvip7MJy5Qk16HVx38XBy+8mqsyTrwpr3Zbav/FFXuu6ya8ixOcwNNfiaK+WlUdvBKN//Z+p0ROGVs2ryYzGyQxiAuzSTAQ0AwEMAGIYNAAAI0gAgCQACAAAAABAAAAADKSvLabkvjqq3gl+xdTV00+Ksc5UlsJRm9adTZb9bPz09TLlbcXaqzGM45jSlfsypTXmmv1RlzqbeHqRv7+NpQkucVSUreqMucRlt06yXZpqV+dmt/0Cph3PAurbV11WSfyq0Lvu2U5eZhrt17n42/xU42l1bj8slp3PkOMduNuZtZzh70G29yvp3aqxy+V5/DrJ05aJTahLg1fS/IysbT+Ln8NjI/8AjUJcm5WEspxtRfmzhCPKLbfqWuFx0bXuvUnVzSNtZL1LTrsvJn9NBYaNGOyuBT46sr68AzzPqcb2ld9xxmOzac7pOyfqV8dp6911vRzNIRxLlsOahZVJrVU1J22vK2r4XPSswSvGaelSOy/Gzafpf6HjXQTHRo10qlurry6ud1pZxlZPuueo4fDyo09mEpdTCdtiTu479mz+XVfudGPxscfJ7z2zYqts06c+EJ05N9ykm/oZs6zG9OSptOLjHZktdptKUbd2qNXNVsYeVle0HZc3bRepoV11GEowmu1FUlzs1ZL0t9CPKyaTMZbKvcsiniajXwUkv653/wDguig6JbU4Va8lZVZrY74wur+F3L0L434/i5uX5VIBAXZmNCACVwEO4DAQwAAADGAgAYCAAAAAAAVwGK5hrYqnD3pxXdfX0NeWa0V8d/CMv0IuUn2tMbfpvFRnOGTe0/dmtma7/hl/b0Mks6prcpv+VfqaGMzV1U6ahsp8W7vTVfYzzzxsaYYZS70MHO6dOe+Onjyfoa2Z46phMLUjCi6qW3srafuyu2rb2lyXAxLEpuE1ys/88fuWVKcZx338zGX9N7P300aFp0Y34xWnijgp5NGFatTe5vai+58PLcehbPV6P3OD5ePcU+eUEnGqlotJeD4mdjfHJwdfC1abtGUkuW07GlKU+Mpf1M7THYdSV0UGJw3cQ1mSgrGKNG5a/gnJ7i/yjou5tSq3jDhH4n+hKlrncpwkptxhFuSlCUdG1dO1n4ps9Uw1WbhGDdnKEVJvf2bWXjfiSwGUwglGEdiK5cTebp0+GpabYZaZK3aUdNFZsoM628TXpYan8b1a+GPxTfhG78bFT0r6dQpKVLD9qqtHZaR8+Zcey+nKrSq4updznLq4t79mKUpPzbS/kLyeV0pb4TbtsPSjTjGEFaEIqMVySVkjKRA6nIkMimO5CDAQwGAgAkmO5ECRK4ERgQAVwbAYEQAkK4gICqTUU5N2SV2ygxWaTqNqHZh9X5mXpNiWlCkvjd5eC3L1+xo4eCSMOTO71HRxYTW6j+HDqjcSINGNb7a6iKtSuv7mWSI30INueqOVKbTejd0+D7n3lngcUtO/eLNaKlF6cCiy/FauD0lF/wCPwHS+tx3MWpIrcbhmoyW+L+Hl4foLLcS3o+BY1HdGncYy+NcdTkrOD+F2XhwNSth23ZRbv3FvnWB2WqkdNVtG/lGFTW07dxlr26d6m2jlGR2tKaV/sdJRw0Y6sNpRKrNM12dFqzWSTthllcr6bOPzFQWhzGbZtUcdlyUdrRy5LjZb2zQzDMrNuUldei/c5LH5ztSexr/EUt2vjjpd47FYWLpKnS7FNtybttTdmtfN3Oq6F9NsJSoww9W9PZc2p6uL2puTut61keSYjFt8QwsXJ7y+F8faM8JlNPpnB46jWW1Rq05rnGcX9txsHgmSqpCSlTlKMluabT9Uej5R0pqxSVdba+ZWU/0ZrOafbny/x8p07UDXweMp1o7VOV1x5rua4Gc1YdJXC4gCEgIjTAlcBAAwEAEQAQDAQAMQABy/SGX+5iuVKP8A2ZKixdKY2rUpfNBr0l+5jw7OTP5V2YfGN+BGSJUxTIqWOSNdqxstmGRS1eMNeltI5vM8BKMlUhpKLv49zOsSNbFUNpErS6VeW1dpQmtz7LXFPl6nS4eF1c5zL8O41HFbpO/mmdNSp7MS2LPk7V2dyiqVRtboP7BkDvQpy+aO15PVfQjnMb0pp7tlmfLValTXKEfsP+k7/AZhJJNnCZ1mShtu+zGPvT4tvW0VxZ32MpKSd91jxbp3iH17p37MXJpcBezBU5jmUqz10gt0L/WXNmptt6Ilh8O5Fxg8pb4BqqaGGlJnTZRlbdtCyy/I910dLgcvUeBW5GtNXB5eopaFpQwpswom1SplYi1p05Tovbptpr69z7jqckzSOJg3unF2nHk+a7mc9i1oaPRvF9Vjox+GtGUWu9Lai/p9TbjysumHLhLN/b0ABAdTjMYgAY7kRgO4CABAIAGAgAYCACh6XU+xSn8tRr+qP7FfhZF10kp7WGqfw7Ml5SX9rnP4GeiObln5Oriu8VvSZKSMdJmVlV2KZrQfDkzZqlZTrWqOL36Py1MsmmCwIyRKL0BlhpuahVg/mui1qVNCkx6/Mp92paTloiZVc500M11pT/4v7FhSjZLwRqY6F4W5tfc3raE/au/Suz3F9XSlJctDxbPKcp14uW9p3/qPWuk6uox4N6nnWNo3xMb8pf8AYjftrhGzkmUXSbR1WEypaaBk2HVkdLQoKxXtbK6aVDBpcDZVOxmqtR8hUoO13vfDl3EaU2UaRkehNIx1WXkV20sbLQpMsblmGFS4VG34RhJs38yrWTI+z/CdZiK2Kfu011cP+UtZNeCsv5i2E3kjO6xr0C4XIgdbhSuMhcLgTuFyIBKVwFcAI3C4AEC40wAB3IjADBjae3TqR+aEl9DjMtnuADDm+nTwfa6oszpjAzaVjmijxa2a0HzvH11/sAFM2nH2t6W4yWEAitVfvVn/AAu3p+9y1mtwAMTJrYx6JfxR/wCyNtMALK/Siz/Wz5HC4mn/ALmHftfdABWtsHbZVSskXO3ZABE6Rl20JV9qoo+foyxigAjAz9G2auImAGlZxyvSHFbMWd10TwH4fB0YfE4qc/8AlPtP9PIANOHtnz31FuMQHQ5jAAAAGAAAAB//2Q==")'
                                }}
                            >
                                <span className="sr-only">Hugh Jackman</span>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/settings')}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/logout')}
                                    >
                                        Logout
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default Header
