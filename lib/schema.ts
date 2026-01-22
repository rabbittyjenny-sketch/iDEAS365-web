
import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

// Blog Posts Table
export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    content: text('content').notNull(), // Markdown content
    excerpt: text('excerpt'),
    coverImage: text('cover_image'),
    category: text('category').default('General'),
    published: boolean('published').default(false),
    createdAt: timestamp('created_at').defaultNow(),
});

// Works / Portfolio Table
export const works = pgTable('works', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    category: text('category').notNull(), // 'AI Tools', 'Live Commerce', 'Business Systems'
    imageUrl: text('image_url'),
    link: text('link'),
    featured: boolean('featured').default(false),
    createdAt: timestamp('created_at').defaultNow(),
});

// Products / Resources Table
export const products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    price: text('price'), // Store as string for flexibility (e.g. "Free", "$19")
    downloadUrl: text('download_url'),
    type: text('type').default('Template'), // 'Template', 'Guide', 'Course'
    createdAt: timestamp('created_at').defaultNow(),
});
