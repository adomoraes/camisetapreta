import {delay, HttpResponse, http} from 'msw'
import profiles from './data/profiles.json' with {type: 'json'}

export const handlers = [
	http.get('/profiles', async () => {
		await delay('real')
		return HttpResponse.json(profiles)
	})
]
