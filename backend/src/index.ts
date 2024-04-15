import { Hono } from 'hono'
import authRoute from './routes/auth_routes'
import blogRoute from './routes/blog_routes';
import { cors } from 'hono/cors';


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string
	}
}>().basePath('/api/v1');

app.use(cors())

app.route('/user',authRoute);
app.route('/blog',blogRoute);

export default app
