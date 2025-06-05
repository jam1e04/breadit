import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"
import { notFound } from "next/navigation"

const Layout = async({ children, params: { slug } }: {
    children: React.ReactNode
    params: { slug: string }
 }) => {

    const session = await getAuthSession()
    const subreddit = await db.subreddit.findFirst({
        where: {
            name: slug
        },
        include: {
            posts: {
                include: {
                    author: true,
                    votes: true,
                },
            }
        }
    })

    const subscription = !session?.user ? undefined : await db.subscription.findFirst({
        where: {
            subreddit: {
                name: slug
            },
            user: {
                id: session.user.id
            }
        }
    })

    const isSubscribed = !!subscription

    if (!subreddit) return notFound()
    
    const memberCount = await db.subscription.count({
        where: {
            subreddit: {
                name: slug
            }
        }
    })

    return <div className="sm:container mx-auto max-w-7xl h-full pt-12">
        <div>
            {/*TODO:Button to take us bake */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4 py-6">
                <div className="flex flex-col col-span-2 span-y-6">
                    {children}
                </div>

                {/* info sidebar */}
                <div className="hidden md:block overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
                    <div className="px-6 py-4">
                        <p className="font-semibold py-3">About r/</p>
                    </div>

                    <dl className="divide-y divide-gray-100 px-6 py-4 text-sm leading-6 bg-white">
                        <div className="flex justify-between"></div>
                    </dl>
                </div>
            </div>

        </div>
    </div>
}

export default Layout