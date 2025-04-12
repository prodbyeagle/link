export default function ProfileLoading() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-background text-foreground'>
			<div className='w-full max-w-md flex flex-col items-center space-y-4'>
				<div className='w-24 h-24 rounded-full bg-muted animate-pulse'></div>
				<div className='w-40 h-6 bg-muted animate-pulse rounded'></div>
				<div className='w-64 h-4 bg-muted animate-pulse rounded'></div>
				<div className='w-full space-y-3 mt-8'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className='w-full h-16 bg-secondary animate-pulse rounded-lg'></div>
					))}
				</div>
			</div>
		</div>
	);
}
