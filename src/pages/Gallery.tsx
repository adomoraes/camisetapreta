import {useSuspenseQuery} from '@tanstack/react-query'
import {getProfiles} from '@/api/profiles'
import {Profile} from '@/components/Profile'
import {Head} from '@/components/Head'

export function Gallery() {
	const {data} = useSuspenseQuery({
		queryFn: getProfiles,
		queryKey: ['profiles']
	})

	return (
		<>
			<Head title='Vitamin' />
			<div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((profile, index) => (
					<Profile profile={profile} index={index} key={`ProfileCard-${profile.name}`} />
				))}
			</div>
		</>
	)
}
