import {useSuspenseQuery} from '@tanstack/react-query'
import {Link, Navigate, useParams} from 'react-router'
import {getProfiles} from '@/api/profiles'
import {Head} from '@/components/Head'
import {ImageAttribution} from '@/components/ImageAttribution'
import {useMediaQuery} from '@/utils/useMediaQuery'

const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.4
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.3

export function Details() {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)')
	const {profileName} = useParams()

	const {data} = useSuspenseQuery({
		queryFn: getProfiles,
		queryKey: ['profiles']
	})

	const profile = data?.find(
		f => f.name.toLowerCase() === profileName?.toLowerCase()
	)
	if (!profile) {
		return <Navigate replace={true} to='/' />
	}

	const imageWidth = isTabletAndUp
		? window.innerWidth * DESKTOP_IMAGE_WIDTH_PERCENTAGE
		: window.innerWidth
	const imageHeight = isTabletAndUp
		? window.innerHeight
		: window.innerHeight * MOBILE_IMAGE_HEIGHT_PERCENTAGE

	return (
		<>
			<Head title={profile.name} />
			<div className='flex min-h-screen flex-col items-center sm:flex-row'>
				<div className='relative'>
					<img
						alt={profile.name}
						fetchPriority='high'
						height={imageHeight}
						src={`${profile.image.url}&w=${imageWidth}&h=${imageHeight}`}
						style={{
							backgroundColor: profile.image.color
						}}
						width={imageWidth}
					/>
					<ImageAttribution author={profile.image.author} />
				</div>
				<div className='my-8 sm:my-0 sm:ml-16'>
					<Link className='flex items-center' to='/'>
						<img alt='' height={20} src='/icons/arrow-left.svg' width={20} />
						<span className='ml-4 text-xl'>Voltar</span>
					</Link>

					<h1 className='mt-2 font-bold text-6xl sm:mt-8'>{profile.name}</h1>
					<h2 className='mt-3 text-gray-500 text-xl dark:text-gray-400'>
						"Frase de destaque"
					</h2>
					<table className='mt-8 text-lg'>
						<thead>
							<tr>
								<th className='px-4 py-2'>.</th>
								<th className='px-4 py-2'>.</th>
							</tr>
						</thead>
						<tbody>
							{profile.metadata.map(({name, value}) => (
								<tr className='font-medium' key={`Profile-${name}`}>
									<td className='border border-gray-300 px-4 py-2'>{name}</td>
									<td className='border border-gray-300 px-4 py-2'>{value}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}
