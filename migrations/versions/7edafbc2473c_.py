"""empty message

Revision ID: 7edafbc2473c
Revises: a470eb6bbf70
Create Date: 2024-07-19 04:45:27.884554

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7edafbc2473c'
down_revision = 'a470eb6bbf70'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cotizacion', schema=None) as batch_op:
        batch_op.add_column(sa.Column('cantidad', sa.String(length=80), nullable=False))
        batch_op.drop_column('descripcion')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cotizacion', schema=None) as batch_op:
        batch_op.add_column(sa.Column('descripcion', sa.VARCHAR(length=100), autoincrement=False, nullable=False))
        batch_op.drop_column('cantidad')

    # ### end Alembic commands ###
